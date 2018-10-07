# Validation des Devices 
Je pense qu'il est necessaire de mettre en place un système de validation/check des Bases de Données.

## Aujourd'hui

* Zigate 
  * Acces: On obtient une liste des devices par la commande 0x0015 et on receptionne via 0x8015
* DeviceList.txt - Il s'agit du dictionnaire créé et géré par le Plugin
  * Acces: ListOfDevices
* Domoticz DB
  * Access: Devices


## Initialisation
* Devices est fourni par le framework python de Domoticz à l'entrée dans le plugin
* ListOfDevices est initialisée 
  1. Par une copie de ce qui est dans la base Domoticz via Devices
  1. Lecture du fichier DeviceList.txt et dans le cas ou le Device n'existe pas dans la base Domoticz, alors celui-ci est ajouté à ListOfDevice

## Questions:
* Aucun traitement si le device n'est pas dans DeviceList.txt. Cela permet au plugin de fonctionner normalement sur la base des devices déjà créés.
* Si un Device est dans la Zigate , mais n'est pas pas Domoticz ni dans DeviceList.txt. Rien n'ai fait!
  * Ne devrait-n pas lancer un Discovery 0x0054/0x8045, 0x0042, 0x0043, 0x8043 ) ? Dans le cas ou le process n'aboutie pas, ne faudrait-il pas supprimer ce Device de la zigate, car il s'agit d'un Zombie ou d'un dead device !
  * Si un Device se trouve dans Domoticz ou dans DeviceList.txt , mais pas dans la Zigate il s'agit là d'un device qui n'a pas lieu d'etre !


## Problème:
* Le informations relatives au device dans la base Domoticz sont poussées que lors de la création. Si durant la vie du plugin des informations sont ajoutées alors cela n'est pas visible dans la base Domoticz.
  * Il serait opportun d'avoir le moyen d'updater la base Domoticz de temps à autres ( arret de système ... ou autres )
