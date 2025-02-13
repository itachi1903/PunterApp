import { Image, StyleSheet, Text, View, Alert, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import PortionSelector from '@/componenetsUi/Home/portionSelector';
import { useState } from 'react';
import PostItem from '@/componenetsUi/Home/PostItem';
import { styles } from '@/styles/HomeStyle';

const posts = [
  {
    "username": "Dante",
    "profileImage": "https://i.pravatar.cc/101",
    "time": "10:22 AM - 1/1/25",
    "content": "I think playing these games at these period can be very profitable...",
    "likes": 200,
    "comments": 120,
    "shares": 200,
    "views": "2.5k",
    "isImage": true,
    "images": [
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuuKpIqgOelRRKpnwrhZJTOodmTrVrM78jxZLZ85i1br-bC7Qz",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT9lzboWcKDlhRA-YqCZxo_aF5EomSyB2ZPLd60T7cWkdWx7sbZ",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRrcwWKNg6NgkaTAR8_NjircWBh7p2yvMoNAQ7oZVEea9aShha"
    ]
  },
  {
    "username": "Vergil",
    "profileImage": "https://i.pravatar.cc/102",
    "time": "8:30 AM - 2/1/25",
    "content": "This is a random post without images.",
    "likes": 150,
    "comments": 80,
    "shares": 90,
    "views": "1.2k"
  },
  {
    "username": "Sephiroth",
    "profileImage": "https://i.pravatar.cc/103",
    "time": "9:45 AM - 3/1/25",
    "content": "I think playing these games at these period can be very profitable...",
    "likes": 180,
    "comments": 110,
    "shares": 160,
    "views": "1.9k",
    "isImage": true,
    "images": [
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuuKpIqgOelRRKpnwrhZJTOodmTrVrM78jxZLZ85i1br-bC7Qz",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT9lzboWcKDlhRA-YqCZxo_aF5EomSyB2ZPLd60T7cWkdWx7sbZ"
    ]
  },
  {
    "username": "Cloud",
    "profileImage": "https://i.pravatar.cc/104",
    "time": "7:15 AM - 4/1/25",
    "content": "One image only, so it should be full width.",
    "likes": 210,
    "comments": 130,
    "shares": 250,
    "views": "3.1k",
    "isImage": true,
    "images": [
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuuKpIqgOelRRKpnwrhZJTOodmTrVrM78jxZLZ85i1br-bC7Qz"
    ]
  },
  {
    "username": "Admin",
    "profileImage": "https://i.pravatar.cc/104",
    "time": "7:15 AM - 4/1/25",
    "content": "One image only, so it should be full width.",
    "likes": 210,
    "comments": 130,
    "shares": 250,
    "views": "3.1k",
    "isImage": true,
    "images": [
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuuKpIqgOelRRKpnwrhZJTOodmTrVrM78jxZLZ85i1br-bC7Qz",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT9lzboWcKDlhRA-YqCZxo_aF5EomSyB2ZPLd60T7cWkdWx7sbZ",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRrcwWKNg6NgkaTAR8_NjircWBh7p2yvMoNAQ7oZVEea9aShha",
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTuuKpIqgOelRRKpnwrhZJTOodmTrVrM78jxZLZ85i1br-bC7Qz",
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT9lzboWcKDlhRA-YqCZxo_aF5EomSyB2ZPLd60T7cWkdWx7sbZ",
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQRrcwWKNg6NgkaTAR8_NjircWBh7p2yvMoNAQ7oZVEea9aShha",
    ]
  }
]


export default function HomeScreen() {
  const [selectedPortion, setSelectedPortion] = useState("posts");

  const handleSelection = (value: string) => {
    Alert.alert("Selected Portion:", value);
    setSelectedPortion(value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostItem post={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Header */}
            <View style={styles.header}>
              <Image source={require("@/assets/logo.png")} style={styles.logo} alt='logo' />

              <View style={styles.headerRight}>
                <View style={styles.rCan}>
                  <Text style={styles.r}>R</Text>
                  <Text style={styles.rNumber}>10</Text>
                </View>

                <Image source={require('@/assets/images/man.png')} style={styles.headerProfile} alt='profile image' />

                <Link href={"/(tabs)"} style={styles.headerNotifitcation}>
                  <Ionicons name='notifications' size={25} color="white" />
                </Link>
              </View>
            </View>

            {/* Portion Selector */}
            <PortionSelector
              options={[
                { name: "Posts", value: "posts" },
                { name: "Announcements", value: "announcements" },
              ]}
              onSelect={handleSelection}
              defaultValue={selectedPortion}
            />

            {/* Spacing */}
            <View style={{ height: 20 }} />
          </>
        }
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
      <Link href={'/createPost'} style={styles.createpost}>
        <View style={styles.createpostCan}>
          <AntDesign name='plus' size={30} color={"black"} />
        </View>
      </Link>

    </SafeAreaView>
  );
}

