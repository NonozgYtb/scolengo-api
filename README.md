<a name="Skolengo"></a>

## Skolengo
Support non officiel de l'API de la nouvelle application mobile Skolengo.
Ce module est destiné à devenir le successeur de [kdecole-api](https://github.com/maelgangloff/kdecole-api) dans l'éventualité où l'accès à l'ancienne API serait définitivement clos.

Pour participer et se tenir informé, **rejoins le serveur Discord: https://discord.gg/9u69mxsFT6**

**Kind**: global class  

* [Skolengo](#Skolengo)
    * [.getAppCurrentConfig()](#Skolengo.getAppCurrentConfig) ⇒ <code>Promise.&lt;SkolengoResponse.&lt;CurrentConfig&gt;&gt;</code>
    * [.searchSchool(text, limit, offset)](#Skolengo.searchSchool) ⇒ <code>Promise.&lt;SkolengoResponse.&lt;Array.&lt;School&gt;, Links, Meta&gt;&gt;</code>
    * [.getOauth2Client(school)](#Skolengo.getOauth2Client) ⇒ <code>Promise.&lt;ClientOAuth2&gt;</code>

<a name="Skolengo.getAppCurrentConfig"></a>

### Skolengo.getAppCurrentConfig() ⇒ <code>Promise.&lt;SkolengoResponse.&lt;CurrentConfig&gt;&gt;</code>
Configuration actuelle de l'application mobile (dernière version déployée, dernière version supportée, ...)

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  
**Returns**: <code>Promise.&lt;SkolengoResponse.&lt;CurrentConfig&gt;&gt;</code> - La configuration actuelle de l'app  
**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.getAppCurrentConfig().then(config => {
  console.log(`Dernière version déployée: ${config.data.attributes.latestDeployedSkoAppVersion}`)
  console.log(`Dernière version supportée: ${config.data.attributes.latestSupportedSkoAppVersion}`)
})
```
<a name="Skolengo.searchSchool"></a>

### Skolengo.searchSchool(text, limit, offset) ⇒ <code>Promise.&lt;SkolengoResponse.&lt;Array.&lt;School&gt;, Links, Meta&gt;&gt;</code>
Rechercher un établissement scolaire

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  
**Returns**: <code>Promise.&lt;SkolengoResponse.&lt;Array.&lt;School&gt;, Links, Meta&gt;&gt;</code> - Les établissements cherchés  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| text | <code>string</code> |  | Le nom partiel de l'établissement |
| limit | <code>number</code> | <code>10</code> | Nombre max d'éléments |
| offset | <code>number</code> | <code>0</code> | Offset |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.searchSchool('Lycée Louise Weiss').then(schools => {
  console.log(schools)
})
```
<a name="Skolengo.getOauth2Client"></a>

### Skolengo.getOauth2Client(school) ⇒ <code>Promise.&lt;ClientOAuth2&gt;</code>
Créer un client OAuth 2.0 permettant l'obtention des jetons (refresh token et access token)

**Kind**: static method of [<code>Skolengo</code>](#Skolengo)  
**Returns**: <code>Promise.&lt;ClientOAuth2&gt;</code> - Le client OAuth 2.0  

| Param | Type | Description |
| --- | --- | --- |
| school | <code>School</code> | L'établissement |

**Example**  
```js
const {Skolengo} = require('scolengo-api')

Skolengo.searchSchool('Lycée Louise Weiss').then(schools => {
  if(!schools.data.length) throw new Error("Aucun établissement n'a été trouvé.")
  const school = schools.data[0]
  Skolengo.getOauth2Client(school, 'skoapp-prod://sign-in-callback').then(oauthClient => {
    console.log(code.getUri())
    // Lorsque l'authentification est effectuée, le CAS redirige vers le callback indiqué avec le code. Ce code permet d'obtenir les refresh token et access token (cf. mécanisme OAuth 2.0)
  })
})
```
