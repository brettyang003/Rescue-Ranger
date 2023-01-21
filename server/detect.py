import cvlib as cvl
from cvlib.object_detection import draw_bbox
import cv2
import time
import numpy as np

# open webcam
webcam = cv2.VideoCapture(0)

if not webcam.isOpened():
    print("Could not open webcam")
    exit()


while webcam.isOpened():

    # read frame from webcam 
    status, img = webcam.read()

    if not status:
        break

# img = cv2.imread('ukraine.jpg')
    out = img.copy()

    # # Face detection
    t1 = time.time()
    faces, confidence = cvl.detect_face(img)
    bbox, label, conf = cvl.detect_common_objects(img)
    t2 = time.time()
    print(f'Inference at {1/(t2 - t1)} FPS')

    for face in faces:
        print('Face Detected...')
        x1, y1, x2, y2 = face
        out = cv2.rectangle(out, (x1, y1), (x2, y2), (255, 0, 0), 2)

    bbox = np.array(bbox)
    conf = np.array(conf)
    label = np.array(label)
    indx = [x for x in range(len(label)) if label[x] == 'person']

    bbox = bbox[indx]
    conf = conf[indx]
    label = label[indx]
    print(f'Detected {len(bbox)} people...')

    out = draw_bbox(out, bbox, label, conf)

    if len(bbox) + len(faces) > 0:
        print('Saving...')
        cv2.imwrite('detected.png', out)