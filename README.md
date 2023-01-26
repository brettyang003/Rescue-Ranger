# Rescue-Ranger

Inspiration
In recent times, we have witnessed undescribable tragedy occur during the war in Ukraine. The way of life of many citizens has been forever changed. In particular, the attacks on civilian structures have left cities covered in debris and people searching for their missing loved ones. As a team of engineers, we believe we could use our skills and expertise to facilitate the process of search and rescue of Ukrainian citizens.

What it does
Our solution integrates hardware and software development in order to locate, register, and share the exact position of people who may be stuck or lost under rubble/debris. The team developed a rover prototype that navigates through debris and detects humans using computer vision. A picture and the geographical coordinates of the person found are sent to a database and displayed on a web application. The team plans to use a fleet of these rovers to make the process of mapping the area out faster and more efficient.

How we built it
On the frontend, the team used React and the Google Maps API to map out the markers where missing humans were found by our rover. On the backend, we had a python script that used computer vision to detect humans and capture an image. Furthermore, For the rover, we 3d printed the top and bottom chassis specifically for this design. After 3d printing, we integrated the arduino and attached the sensors and motors. We then calibrated the sensors for the accurate values. To control the rover autonomously, we used an obstacle-avoider algorithm coded in embedded C. While the rover is moving and avoiding obstacles, the phone attached to the top is continuously taking pictures. A computer vision model performs face detection on the video stream, and then stores the result in the local directory. If a face was detected, the image is stored on the IPFS using Estuary's API, and the GPS coordinates and CID are stored in a Firestore Database. On the user side of the app, the database is monitored for any new markers on the map. If a new marker has been added, the corresponding image is fetched from IPFS and shown on a map using Google Maps API.

Challenges we ran into
As the team attempted to use the CID from the Estuary database to retrieve the file by using the IPFS gateway, the marker that the file was attached to kept re-rendering too often on the DOM. However, we fixed this by removing a function prop that kept getting called when the marker was clicked. Instead of passing in the function, we simply passed in the CID string into the component attributes. By doing this, we were able to retrieve the file. Moreover, our rover was initally designed to work with three 9V batteries (one to power the arduino, and two for two different motor drivers). Those batteries would allow us to keep our robot as light as possible, so that it could travel at faster speeds. However, we soon realized that the motor drivers actually ran on 12V, which caused them to run slowly and burn through the batteries too quickly. Therefore, after testing different options and researching solutions, we decided to use a lithium-poly battery, which supplied 12V. Since we only had one of those available, we connected both the motor drivers in parallel.

Accomplishments that we're proud of
We are very proud of the integration of hardware and software in our Hackathon project. We believe that our hardware and software components would be complete projects on their own, but the integration of both makes us believe that we went above and beyond our capabilities. Moreover, we were delighted to have finished this extensive project under a short period of time and met all the milestones we set for ourselves at the beginning.

What we learned
The main technical learning we took from this experience was implementing the Estuary API, considering that none of our teammembers had used it before. This was our first experience using blockchain technology to develop an app that could benefit from use of public, descentralized data.

What's next for Rescue Ranger
Our team is passionate about this idea and we want to take it further. The ultimate goal of the team is to actually deploy these rovers to save human lives. The team identified areas for improvement and possible next steps. Listed below are objectives we would have loved to achieve but were not possible due to the time constraint and the limited access to specialized equipment.

Satellite Mapping -> This would be more accurate than GPS.
LIDAR Sensors -> Can create a 3D render of the area where the person was found.
Heat Sensors -> We could detect people stuck under debris.
Better Cameras -> Would enhance our usage of computer vision technology.
Drones -> Would navigate debris more efficiently than rovers.
