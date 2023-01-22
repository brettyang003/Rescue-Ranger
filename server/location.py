# get gps coordinates from geopy
import json

# import urlopen from urllib.request
from urllib.request import urlopen

def get_location():

    # open following url to get ipaddress
    urlopen("http://ipinfo.io/json")

    # load data into array
    data = json.load(urlopen("http://ipinfo.io/json"))

    # extract lattitude
    lat = data['loc'].split(',')[0]

    # extract longitude
    lon = data['loc'].split(',')[1]

    return (lat, lon)

if __name__ == '__main__':
    lat, lon = get_location()
    print(lat, lon)