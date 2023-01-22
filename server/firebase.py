
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("debrisbot-a1a99-firebase-adminsdk-f7z1z-b96d2f16a3.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
