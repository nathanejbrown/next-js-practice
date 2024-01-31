/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bduehv2nbsoe24j",
    "created": "2024-01-31 21:14:51.649Z",
    "updated": "2024-01-31 21:14:51.649Z",
    "name": "NoteStuffIdk",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "mwvgqy6n",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "ds51nlwf",
        "name": "notes",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bduehv2nbsoe24j");

  return dao.deleteCollection(collection);
})
