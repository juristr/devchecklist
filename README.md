devchecklist
============

This project is about the idea to create a (potentially) community driven website for creating "checklists". A checklist is a series of "checks" related to a specific topic and are meant to help the developer to measure his knowledge in the given field. The final idea is to learn!

## Planned features

- List of all checklists
- Compilation of a checklist (with persistence per-user storage on Firebase).
- Progress visualization among all checklists (with nice graphs and charts)
- Ability to visualize hints for a given check item. These hints can be links to tutorials on the web.

## Technical stuff

The idea is to host the page as a [GitHub Page](https://pages.github.com/) with a [Firebase backend](https://www.firebase.com/).

- Angular frontend using Material Design ([LumX](http://ui.lumapps.com/)?)
- Firebase - AngularFire (https://www.firebase.com/docs/web/libraries/angular/index.html)
- ...

### Checklist structure

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

## Contributing

_(contribution guidelines to come soon)_

## Release

_(the first release has still to be defined)_