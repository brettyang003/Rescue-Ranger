import os
import requests
import time
from location import get_location
from firebase import db
import json


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
        # lat, lon = get_location()
        lat, lon = 43.7081, -79.4479
        print(lat, lon)
        data = {
            u'lat': lat,
            u'lon': lon,
            u'cid': response.json()['cid'],
            u'is_rescued': False
        }

        update_time, city_ref = db.collection(u'marker').add(data)
        print(f'Inserted {city_ref} at {update_time}')

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