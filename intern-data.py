import json

# Load the JSON data from a file or a URL
with open('internships.json', 'r') as file:
    data = json.load(file)

# Filter the internships based on location
location = "San Francisco, CA"
filtered_internships = [internship for internship in data["Internships"] if internship["location"] == location]

# Print the filtered internships
for internship in filtered_internships:
    print(internship["title"], "at", internship["company"], "in", internship["location"])
