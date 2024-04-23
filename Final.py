import streamlit as st
import streamlit_webrtc as webrtc
import mediapipe as mp
import numpy as np
import cv2  # Import OpenCV

mp_drawing = mp.solutions.drawing_utils
mp_pose = mp.solutions.pose

# Streamlit layout
st.title('Gym exercises monitoring powered by AI')

# Streamlit container for user input
with st.container():
    st.header('Enter your data')
    fn1 = st.text_input("Enter your name ")

# Streamlit container for exercise selection
with st.container():
    st.header('Exercise Selection')
    choice = st.selectbox('Choose an exercise', ('Bicep Curl', 'Shoulder Press', 'High Knees'))

# Calculate angles between joints
def calculate_angle(a, b, c):
    a = np.array(a)
    b = np.array(b)
    c = np.array(c)
    radians = np.arctan2(c[1] - b[1], c[0] - b[0]) - np.arctan2(a[1] - b[1], a[0] - b[0])
    angle = np.abs(radians * 180.0 / np.pi)
    if angle > 180.0:
        angle = 360 - angle
    return angle

# Exercise monitoring parameters
reps_count = 0
reps_completed = False
stage = None

# Streamlit container for displaying video stream and workout information
with st.container():
    st.header('Exercise Monitoring')
    
    # Define a function to process video frames
    def process_frame(frame):
        # Convert the frame to RGB
        frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        
        # Perform pose detection
        with mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5) as pose:
            results = pose.process(frame)
            if results.pose_landmarks:
                landmarks = results.pose_landmarks.landmark
                
                # Extract relevant landmarks based on exercise choice
                if choice == 'Bicep Curl':
                    # Extract left and right elbow landmarks
                    left_shoulder = [landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.LEFT_SHOULDER.value].y]
                    left_elbow = [landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.LEFT_ELBOW.value].y]
                    left_wrist = [landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].x, landmarks[mp_pose.PoseLandmark.LEFT_WRIST.value].y]
                    right_shoulder = [landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER.value].y]
                    right_elbow = [landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_ELBOW.value].y]
                    right_wrist = [landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].x, landmarks[mp_pose.PoseLandmark.RIGHT_WRIST.value].y]
                    
                    # Calculate angles
                    angle_1 = calculate_angle(left_shoulder, left_elbow, left_wrist)
                    angle_2 = calculate_angle(right_shoulder, right_elbow, right_wrist)
                    
                    # Exercise monitoring logic
                    if angle_1 > 160 and angle_2 > 160:
                        stage = "Down"
                    if angle_1 < 30 and angle_2 < 30 and stage == 'Down':
                        stage = "Up"
                        reps_count += 1
                        reps_completed = True
                    else:
                        reps_completed = False
                    
                    # Display exercise status
                    st.write("Reps Count:", reps_count)
                    st.write("Stage:", stage)
                    if reps_completed:
                        st.write("Repetition Completed")
                    
                elif choice == 'Shoulder Press':
                    # Exercise monitoring logic for Shoulder Press
                    pass
                    
                elif choice == 'High Knees':
                    # Exercise monitoring logic for High Knees
                    pass
                    
                # Draw landmarks on the frame
                mp_drawing.draw_landmarks(frame, results.pose_landmarks, mp_pose.POSE_CONNECTIONS)
        
        # Return the processed frame
        return frame
    
    # Create a webrtc.VideoTransformer component to capture video from the webcam
    webrtc_streamer = webrtc.VideoTransformer(
        video_transformer_factory=process_frame,
        source_video_width=640,  # Set the desired width of the video stream
        source_video_height=480  # Set the desired height of the video stream
    )
    
    # Display the video stream within the Streamlit app
    webrtc_streamer
