import React, {useState, useEffect} from 'react';
import {StyleSheet, Image, TouchableOpacity, View, Text} from 'react-native';
import storage from '@react-native-firebase/storage';

const Avatar = ({avatar}) => {
  
  const url = [];
  const [image1, setImage1] = useState('');
  const [image2, setImage2] = useState('');
  const [reference, setReference] = useState(storage().ref('app-images'));

  useEffect(() => {
    listFilesAndDirectories(reference).then(() => console.log("finished")).catch((error) => alert(error));
  }, []);

  function listFilesAndDirectories(reference, pageToken) {
    return reference.list({ pageToken }).then(result => {
      // Loop over each item
      result.items.forEach(ref => {
        console.log(ref.fullPath);
        // push each image link into url array
        url.push(ref.fullPath);
      });

  
      // call the first image and set it to image1
          storage()
            .ref(url[0])
            .getDownloadURL()
            .then(theurl => {
              setImage1(theurl);
            })
            .catch(error => alert(error));

      // call the second image and set it to image2
          storage()
            .ref(url[1])
            .getDownloadURL()
            .then(theurl => {
              setImage2(theurl);
            })
            .catch(error => alert(error));


      if (result.nextPageToken) {
        return listFilesAndDirectories(reference, result.nextPageToken);
      }
  
      return Promise.resolve();
    });
  }

  return (
  <>

    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => alert(image1)}>
      <Image style={styles.avatar} source={{uri: url[i]}} />
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.touchableOpacity}
      onPress={() => alert(image2)}>
      <Image style={styles.avatar} source={{uri: image2}} />
    </TouchableOpacity>
  </>
  );

};

export default Avatar;

