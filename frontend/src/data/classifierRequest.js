const CLASSIFY_REQUEST_BODY = {
    "truncate": "END",
    "examples": [
        {
            "text": "Dermatologists don't like her!",
            "label":"spam"
        },
        {
            "text":"'Hello, open to this?'",
            "label":"spam"
        },
        {
            "text":"Your parcel will be delivered today",
            "label":"Not spam"
        },
        {
            "text":"Weekly sync notes",
            "label":"Not spam"
        },
        {
            "text": "Pre-read for tomorrow",
            "label":"Not spam"
        }
    ],
    "model": "embed-english-v2.0"
}

export {CLASSIFY_REQUEST_BODY}