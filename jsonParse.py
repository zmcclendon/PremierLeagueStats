import json
import urlparse
from pprint import pprint

def __unicode__(self):
   return unicode(self.some_field) or u''

count = 0
data = json.load(open("stats.json", "r"))
lastName = ""
for player in data:
	if player["stats"]:
		parsed = urlparse.urlparse(player["response"])
		season = urlparse.parse_qs(parsed.query)['compSeasons'][0].replace(">","")

		f= open("./players/"+player["name"].replace(" ", "_")+"_"+season+".json","w+")
		data = {}
		data["name"] = player["name"]
		data["season"] = season
		for stats in player["stats"]:
			for x in stats:
				if x == "name":
					data[stats[x]] = 0
					lastName = stats[x]
				if x == "value":
					data[lastName] = stats[x]
		json.dump(data, f, indent=4, sort_keys=True)
		f.close
