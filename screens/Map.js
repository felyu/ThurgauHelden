import { fontScale } from 'nativewind';
import React, {useState, useRef, useEffect} from 'react';
import {Video, AVPlaybackStatus} from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import {SafeAreaView, Text, View, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { chivo } from '../styles/font.js';
import PressableOpacity from '../components/PressableOppacity.js';
import Header from '../components/Header.js';
import { ScrollView } from 'react-native-gesture-handler';
import LocationMarker from '../assets/icons/LocationMarker';
import Compass from '../assets/icons/Compass.js';
import LightningBolt from '../assets/icons/LightningBolt.js';

export default function MapScreen({ navigation }) {

    return (
    <View className="w-screen h-screen bg-black">
        <SafeAreaView className="bg-white flex-1 relative w-screen h-screen">

        {/* Header */}
        <Header title="Karte"></Header>

        <MapView
        customMapStyle={mapStyle} 
        showsUserLocation={true}
        followsUserLocation={true}
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        region={{
          latitude: 47.56807,
          longitude: 9.37137,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,

        }}
        className="flex-1 h-screen w-screen">

        <Marker 
        icon={require('./../assets/images/marker2.png')}
        coordinate={{ latitude : 47.56807 , longitude : 9.36147 }}
        />

        <Marker 
        icon={require('./../assets/images/marker2.png')}
        coordinate={{ latitude : 47.57807 , longitude : 9.36147 }}
        />

                
        <PressableOpacity className="bg-gray-50 shadow-sm border-2 border-gray-300 bottom-24 absolute  right-3 m-2 rounded-md flex h-[58px] w-[58px] justify-center items-center">
            <LocationMarker className="pr-2" size="35" color="#313131"></LocationMarker>
        </PressableOpacity>

        </MapView>

        

        </SafeAreaView>
    </View>
    );
  }

  // https://github.com/react-native-maps/react-native-maps#customizing-the-map-style
// https://mapstyle.withgoogle.com/
const mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]
  


  var places = [
    [2736122, 1261994, '<p>Bitzihalle<br/>Turnerweg 2<br/>9220 Bischofszell</p>'],
    [2732217, 1262665, '<p>Schule Kenzenau<br/>Waldplatzstrasse 2<br/>9223 Schweizersholz</p>'],
    [2736852, 1260293, '<p>Gemeindehaus<br/>Oberdorfstrasse 3<br/>9213 Hauptwil</p>'],
    [2737010, 1265025, '<p>Gemeindehaus<br/>Bernhauserstrasse 5<br/>8588 Zihlschlacht</p>'],
    [2734543, 1263386, '<p>Gemeindehaus / Hirschenschür<br/>Hauptstrasse 18<br/>9216 Hohentannen</p>'],
    [2735938, 1262467, '<p>Bruggwiesenhalle<br/>Amriswilerstrasse  22<br/>9220 Bischofszell</p>'],
    [2719824, 1265075, '<p>Kirchgemeindehaus<br/>Kirchweg 15<br/>9556 Affeltrangen</p>'],
    [2721884, 1270324, '<p>Gemeindehaus<br/>Flugplatzstrasse 12<br/>8514 Amlikon</p>'],
    [2729987, 1271217, '<p>Gemeindehaus<br/>Hauptstrasse 43<br/>8572 Berg</p>'],
    [2732844, 1271026, '<p>Gemeindeverwaltung<br/>Lochäckerstrasse 2<br/>8585 Mattwil</p>'],
    [2729019, 1267782, '<p>Gemeindehaus<br/>Mühlestrasse 2<br/>8575 Bürglen</p>'],
    [2723776, 1268691, '<p>Gemeindeverwaltung<br/>Schulstrasse 1<br/>9565 Bussnang</p>'],
    [2732590, 1264911, '<p>Gemeindeverwaltung<br/>Thurbruggstrasse 11a<br/>9215 Schönenberg an der Thur</p>'],
    [2722301, 1272583, '<p>Feuerwehrdepot / Werkhof<br/>Wigoltingerstrasse 3<br/>8560 Märstetten</p>'],
    [2734715, 1268233, '<p>Gemeindehaus<br/>Aachstrasse 11<br/>8586 Erlen</p>'],
    [2728189, 1264231, '<p>Gemeindeverwaltung<br/>Buhwilerstrasse 1<br/>8577 Schönholzerswilen</p>'],
    [2731596, 1266556, '<p>Gemeindehaus<br/>Kradolfstrasse 15<br/>8583 Sulgen</p>'],
    [2725717, 1270037, '<p>Stadtverwaltung<br/>Frauenfelderstrasse 8<br/>8570 Weinfelden</p>'],
    [2719468, 1273043, '<p>Zivilschutzanlage b. Werkhof<br/>Bahnhofstrasse 30<br/>8556 Wigoltingen</p>'],
    [2725784, 1261976, '<p>Gemeindehaus<br/>Dorfstrasse 10<br/>9514 Wuppenau</p>'],
    [2710134, 1261022, '<p>Gemeindehaus / Gemeindeplatz<br/>Gemeindeplatz 1<br/>8355 Aadorf</p>'],
    [2719486, 1261893, '<p>Feuerwehrdepot    <br/>Schulstrasse 5<br/>9553 Bettwiesen</p>'],
    [2712703, 1256638, '<p>Schulhaus Lützelmurg<br/>Hauptstrasse 10<br/>8362 Balterswil</p>'],
    [2715099, 1258042, '<p>Gemeindehaus Eschlikon<br/>Wiesenstrasse 3<br/>8360 Eschlikon</p>'],
    [2715374, 1254146, '<p>Hörnlihalle Oberwangen<br/>Fischingerstrasse 64<br/>8374 Oberwangen</p>'],
    [2716760, 1264261, '<p>MZH / Primarschule<br/>Matzingerstrasse 23<br/>9506 Lommis</p>'],
    [2717506, 1259593, '<p>Gemeindehaus<br/>Im Zentrum 4<br/>9542 Münchwilen</p>'],
    [2717569, 1258066, '<p>Gemeindezentrum Dreitannen<br/>Frauenfelderstrasse 3<br/>8370 Sirnach</p>'],
    [2719923, 1263811, '<p>Turnhalle Primarschule Tobel<br/>Hauptstrasse 11<br/>9555 Tobel</p>'],
    [2714590, 1261932, '<p>Dammbühlhalle<br/>Steinlerstrasse 22<br/>9545 Wängi</p>'],
    [2741489, 1271369, '<p>Gemeindeverwaltung<br/>Kesswilerstrasse  16<br/>8582 Dozwil</p>'],
    [2740734, 1269362, '<p>Feuerwehrdepot Auenhofen<br/>Amriswilerstrasse  62<br/>8580 Hefenhofen</p>'],
    [2739162, 1270242, '<p>Gemeindeverwaltung<br/>Hauptstrasse  33<br/>8580 Sommeri</p>'],
    [2745607, 1270136, '<p>Stadtverwaltung<br/>Bahnhofstrasse  19<br/>8590 Romanshorn</p>'],
    [2745420, 1268844, '<p>Gemeindeverwaltung<br/>Arbonerstrasse  8<br/>8599 Salmsach</p>'],
    [2743042, 1272109, '<p>Gemeindeverwaltung<br/>Zentrumsplatz 2<br/>8592 Uttwil</p>'],
    [2741277, 1273136, '<p>Gemeindeverwaltung<br/>Hafenstrasse  1<br/>8593 Kesswil</p>'],
    [2750356, 1264730, '<p>Stadtverwaltung<br/>Hauptstrasse  12<br/>9320 Arbon</p>'],
    [2745349, 1266129, '<p>Mehrzweckhalle Rietzelg<br/>Rietzelgweg 1<br/>9315 Neukirch</p>'],
    [2747482, 1262937, '<p>Gemeindeverwaltung<br/>St.Gallerstrasse  64<br/>9325 Roggwil</p>'],
    [2752491, 1262409, '<p>Genmeindekanzlei<br/>Tübacherstrasse 11<br/>9326 Horn</p>'],
    [2740131, 1267628, '<p>Pentorama<br/>Arbonerstrasse  2<br/>8580 Amriswil</p>'],
    [2720644, 1277327, '<p>Schulhaus<br/>Schulhausstrasse 7<br/>8558 Raperswilen</p>'],
    [2735930, 1273085, '<p>Gemeindehaus<br/>Im Baumgarten  1<br/>8585 Langrickenbach</p>'],
    [2721820, 1281409, '<p>MZH Schulgebäude, BBZ Arenenberg<br/>Arenenberg 2<br/>8268 Salenstein</p>'],
    [2733090, 1277954, '<p>Gemeindehaus Dorfzentrum<br/>Schulstrasse 4<br/>8598 Bottighofen</p>'],
    [2722814, 1275622, '<p>Schulhaus<br/>Schulstrasse 1<br/>8564 Sonterswil</p>'],
    [2731925, 1276453, '<p>Gemeindehaus<br/>Hauptstrasse 8<br/>8574 Lengwil</p>'],
    [2727301, 1280616, '<p>Gemeindehaus<br/>Kirchstrasse 11<br/>8274 Gottlieben</p>'],
    [2727170, 1279775, '<p>Gemeindehaus<br/>Bahnhofstrasse 3<br/>8274 Tägerwilen</p>'],
    [2729391, 1274717, '<p>Turnhalle Alterswilen<br/>Kirchstrasse 13<br/>8573 Alterswilen</p>'],
    [2737368, 1275674, '<p>Werkhof<br/>Moosgrabenstrasse 6<br/>8595 Altnau</p>'],
    [2734838, 1277110, '<p>Gemeindehaus<br/>Klosterstrasse 4<br/>8596 Münsterlingen</p>'],
    [2723850, 1280937, '<p>Werkhof<br/>Hauptstrasse 166<br/>8272 Ermatingen</p>'],
    [2738620, 1274200, '<p>Mehrzweckhalle Rotewis<br/>Rotewisstrasse 1<br/>8594 Güttingen</p>'],
    [2730677, 1278870, '<p>Sport- und Kulturzentrm Dreispitz<br/>Pestalozzistrasse 17<br/>8280 Kreuzlingen</p>'],
    [2731878, 1278201, '<p>Schulhaus Seetal Mehrzweckhalle<br/>Seetalstrasse 80<br/>8280 Kreuzlingen</p>'],
    [2730243, 1278518, '<p>BBM Rosenegg / Torggel<br/>Bärenstrasse 6<br/>8280 Kreuzlingen</p>'],
    [2729304, 1278656, '<p>Schulhaus Bernegg Mehrzweckhalle<br/>Bernrainstrasse 14<br/>8280 Kreuzlingen</p>'],
    [2698294, 1280608, '<p>Gemeindeverwaltung<br/>Rychgass 2<br/>8254 Basadingen</p>'],
    [2718843, 1281533, '<p>Unterseehalle<br/>Bahnhofstrasse  5<br/>8267 Berlingen</p>'],
    [2698450, 1282778, '<p>Rhy-Halle<br/>Basadingerstrasse  10<br/>8253 Diessenhofen</p>'],
    [2707690, 1278367, '<p>Turnhalle<br/>Unterer Schulweg  7<br/>8264 Eschenz</p>'],
    [2713118, 1270766, '<p>Gemeindeverwaltung<br/>Poststrasse 13<br/>8552 Felben</p>'],
    [2708440, 1271646, '<p>Platz vor Mehrzweckhalle<br/>untere Vogelhalde  <br/>8532 Weiningen</p>'],
    [2706289, 1266444, '<p>Gemeindekanzlei<br/>Islikonerstrasse 7<br/>8547 Gachnang</p>'],
    [2712715, 1275809, '<p>Gemeindeverwaltung<br/>Liebenfelserstrasse  3<br/>8506 Lanzenneunforn</p>'],
    [2717726, 1277149, '<p>Gemeindeverwaltung<br/>Hauptstrasse  86<br/>8508 Homburg</p>'],
    [2715768, 1270817, '<p>Gemeindekanzlei<br/>Hauptstrasse  52<br/>8553 Hüttlingen</p>'],
    [2707615, 1274118, '<p>Gemeindeverwaltung<br/>Kanzleiweg  4<br/>8536 Hüttwilen</p>'],
    [2711012, 1278225, '<p>Gemeindeverwaltung<br/>Liebenfelserstrasse 2<br/>8265 Mammern</p>'],
    [2712615, 1264386, '<p>Gemeindeverwaltung<br/>Altholzstrasse 7<br/>9548 Matzingen</p>'],
    [2717514, 1273504, '<p>Gemeindeverwaltung<br/>Frauenfelderstrasse 4<br/>8555 Müllheim</p>'],
    [2699991, 1273627, '<p>Gemeindeverwaltung<br/>Bachstrasse 2<br/>8526 Oberneunforn</p>'],
    [2714228, 1272611, '<p>Mehrzweckhalle<br/>Berglistrasse  28<br/>8505 Pfyn</p>'],
    [2694936, 1279712, '<p>Gemeindeverwaltung<br/>Mettschlatterstrasse  2<br/>8252 Schlatt (TG)</p>'],
    [2715885, 1280701, '<p>Gemeindeverwaltung<br/>Seestrasse  123<br/>8266 Steckborn</p>'],
    [2714197, 1264834, '<p>Gemeindeverwaltung<br/>Dorfstrasse  2<br/>9507 Stettfurt</p>'],
    [2714804, 1267206, '<p>Gemeindeverwaltung<br/>Hauptstrasse  10<br/>8512 Thundorf</p>'],
    [2704617, 1270886, '<p>Schulhaus<br/>Schulstrasse   7<br/>8524 Uesslingen</p>'],
    [2705286, 1279002, '<p>Gemeindeverwaltung<br/>Talacker  1<br/>8259 Kaltenbach</p>'],
    [2708974, 1269116, '<p>Kunsteisbahn<br/>Neuhofstrasse  19<br/>8500 Frauenfeld</p>'],
    [2709772, 1268498, '<p>Casino<br/>Bahnhofplatz  76  b<br/>8500 Frauenfeld</p>'],
    [2709981, 1267542, '<p>Festhalle<br/>Festhüttenstrasse 21<br/>8500 Frauenfeld</p>'],
    [2710179, 1269793, '<p>Stallungen Pferderennbahn<br/>Waffenplatzstrasse  26<br/>8500 Frauenfeld</p>'],
    [2722945, 1262511, '<p>Primarschule<br/>Hauptstrasse 6<br/>9502 Braunau</p>'],
    [2720206, 1256939, '<p>Gemeindezentrum  <br/>Freudenbergstrasse 9<br/>9535 Wilen bei Wil</p>'],
    [2721811, 1256540, '<p>Mehrzwecksaal<br/>Kirchstrasse 24<br/>9532 Rickenbach bei Wil</p>'],
    ];