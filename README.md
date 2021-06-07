# Appointment Booking System

This is an appointment booking system built entirely with React. A lot of the data is fixed, as some of the workflow can only be achieved with a backend server. And given a week's time, this is the extent of my productivity.

The website is hosted at Netlify and you can view it live [here](https://adoring-wescoff-06e007.netlify.app/).

## Things that could be improved upon

1. The time availability (green, yellow) indicator in the calendar dropdown needs to be fixed. At the moment, I am fixing the data for each day's availabiliy. This is obviously isn't practical. It needs to be iteratively produced from a backend server, and perhaps store in a database at a sessional capacity.Then fetched during each session.

2. None of the **Professionals** data is saved in a database. It is all bundled up with the website. As the data is relatively small, this wouldn't be an issue for now, but as more appointments are made, the data grows. Therefore, in the long run, the site would feel clunky.

3. There is currently a lot of translation of Date into string and back into objects and in to different forms such as (13:30, 01:30 PM, ISOString, Date). All of which is hard to keep track. This needs to be properly supported, with a written out communication to allow better understanding. It would certainly take awhile to figure it out, if I come back to this code a few weeks later.

4. The display of the available times is off putting. Ideally, I would like to display it as a weekly schedule (akin to [this](https://www.doctolib.fr/medecin-generaliste/france)), but unfortunately, it would take a longer development effort. This would definitely be revisited, if this website ever moves forward.

## Instructions on changing information

1. Each **Professional** is stored in `./data/listOfProfessionals.js`. If you would like to change any information about the professional, then you just have to edit the file.

2. Each **Appointment** is stored in `./data/listOfAppointments.js`. To mock fake data (e.g. making new appointments) you should edit this file.
