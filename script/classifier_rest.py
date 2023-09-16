import requests

url = "https://api.cohere.ai/v1/classify"

payload = { "truncate": "END" }
headers = {
    "accept": "application/json",
    "content-type": "application/json",
    "authorization": "Bearer kcLpZwryzepeisB5zpCSQtEVLeWdUVlGlUMFi2Db"
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)