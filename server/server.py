import os
import requests
import time
from location import get_location


path = "./detections/detected.png"

def upload_image():
    headers = {
        "Accept": "application/json",
        "Authorization": "Bearer EST8b75a1f3-aeda-46e4-bfd2-fc985e418845ARY"
    }
    url = "https://api.estuary.tech/content/add"

    with open(path, "rb") as f:
        files = {"data": ("file", f)}
        data = {"filename": "file"}

        response = requests.post(url, headers=headers, data=data, files=files)

        print(response.text)
        
        # Get current location
        lat, lon = get_location()
        print(lat, lon)

def watch_folder():
    while True:
        time.sleep(0.5)
        try:
            if os.path.exists(path):
                upload_image()
                os.remove(path)
        except Exception as e: 
            print(e)

watch_folder()