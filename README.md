devchecklist
============

Developer checklist

## Checklist structure

A checklist has the following data structure.

```json
{
    "title": "The checklist title",
    "description": "description about the checklist",
    "sections": [
        {
            "title": "Section title",
            "description": "section description",
            "checks": [
                {
                    "check": "Know how routing works and I'm able to create new ones.",
                    "hints": [
                        {
                            "title": "title",
                            "url": "url to some tutorial that helps solving"
                        }                        
                    ]
                }
            ]
        }
    ]
}
```