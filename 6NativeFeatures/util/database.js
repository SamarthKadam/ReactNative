import * as SQLite from 'expo-sqlite';
import { Place } from '../models/place';

const database=SQLite.openDatabase('places.db');

export function init()
{
    const promise=new Promise((resolve,reject)=>{

        database.transaction((tx)=>{
            tx.executeSql(`
            CREATE TABLE IF NOT EXISTS places(
                id INTEGER PRIMARY KEY NOT NULL,
                title TEXT NOT NULL,
                imageUri TEXT NOT NULL,
                lat REAL NOT NULL,
                lng REAL NOT NULL)
            `,
            [],
            ()=>{
                resolve();
            },
            (_,error)=>{
                reject(error);
            },
            );
        })

    })

    return promise;
}


export function insertPlace(place)
{
    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql(`INSERT INTO places (title,imageUri,lat,lng) VALUES (?,?,?,?)`,
            [place.title,place.imageUri,place.location.lat,place.location.lng],
            (_,result)=>{
                resolve(result);
            },
            (_,error)=>{
                console.log(error);
                reject(error);
            });
        })
    })
    
    return promise;
}

export function fetchPlaces()
{
    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql('SELECT * FROM places',[],
            (_,result)=>{

                const places=[];

                for(const dp of result.rows._array)
                {
                    places.push(new Place(dp.title,dp.imageUri,{lat:dp.lat,lng:dp.lng},dp.id))
                }
                resolve(places);
            },
            (_,error)=>{
                reject(error);
            })
        })
    })

    return promise;
}


export function fetchPlaceDetails(id)
{
    const promise=new Promise((resolve,reject)=>{
        database.transaction((tx)=>{
            tx.executeSql('SELECT * FROM places WHERE id=?',[id],
            (_,result)=>{

                const dbloc=result.rows._array[0];
                console.log(dbloc);
                resolve(dbloc);
            }),
            (_,error)=>{
                reject(error);
            }
        })
    })
    return promise;
}