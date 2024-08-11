import { config } from "@tamagui/config";
import {
  Pressable,
  SafeAreaView,
  TextInput,
  Text as Textreact,
} from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  TamaguiProvider,
  createTamagui,
  XStack,
  Text,
  View,
  ScrollView,
  YStack,
  Image,
  Circle,
  Button,
  fullscreenStyle,
  Label,
  H3,
  H2,
} from "tamagui";
import { LinearGradient } from "expo-linear-gradient";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const tamaguiConfig = createTamagui(config);
const story = [
  {
    logo: "java",
  },
  {
    logo: "react",
  },
  {
    logo: "500px",
  },
  {
    logo: "airbnb",
  },
  {
    logo: "amazon",
  },
  {
    logo: "ankh",
  },
  {
    logo: "battle-net",
  },
];
const FEEDS_DATA = [
  {
    username: "Levi Ackerman",
    imageUrl:
      "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
    hasActiveStory: false,
    feed: {
      imageUrl:
        "https://images.unsplash.com/photo-1533621834623-d0b25d0b14e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFjYXRpb24lMjBtYW58ZW58MHx8MHx8fDA%3D",
      totalLikes: 10,
      friendLikes: [
        {
          name: "Dova",
          imageUrl:
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64d92a54-b206-481d-814e-de021ac31156/dfi2aq6-7d83ac2a-3da8-40da-87fa-ff3cb91c812d.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZDkyYTU0LWIyMDYtNDgxZC04MTRlLWRlMDIxYWMzMTE1NlwvZGZpMmFxNi03ZDgzYWMyYS0zZGE4LTQwZGEtODdmYS1mZjNjYjkxYzgxMmQuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.sUgsOyBGsFYDbc1QEV6aU-gG8h03TA5tJXOX5crnydw",
        },
        {
          name: "Alan Walker",
          imageUrl:
            "https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=4:3",
        },
        {
          name: "Oki",
          imageUrl:
            "https://play-lh.googleusercontent.com/KnFMQzTkrsWoyFZPDovbEGxYbrJF_37APuzIPhYCT_dAFRBKCu57sDiezvQBxoSd5s4=w240-h480-rw",
        },
      ],
      caption:
        "Berakit rakit ke hulu berenang renang ketepian, bersakit sakit dahulu bersenang senang dalam kesepian. Kerja keras, istirahat dan tidur yang cukup, dan banyak berdoa dan bersyukur.",
      totalComments: 5,
      postDate: Date.now() - 60 * 60 * 24 * 1000 * 199,
    },
  },
];
function formatDate(timestamp) {
  const date = new Date(timestamp);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}
const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TamaguiProvider config={tamaguiConfig}>
        <ScrollView>
          <XStack
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 15,
            }}
          >
            <View
              style={{
                width: "75%",
              }}
            >
              <H3>Instagram</H3>
            </View>

            <View
              style={{
                width: "25%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {/* <Text>I</Text> */}
              <FontAwesome5 name="heart" size={25} color="white" />
              <FontAwesome name="address-book" size={25} color="white" />
            </View>
          </XStack>

          <ScrollView horizontal={true}>
            <XStack
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 18,
                padding: 15,
              }}
            >
              <View
                style={{
                  width: "auto",
                  borderWidth: 4,
                  borderColor: "lightblue",
                  borderRadius: "100%",
                  padding: 8,
                }}
              >
                <Image
                  style={{ width: 80, height: 80, borderRadius: "100%" }}
                  source={{
                    uri: "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
                  }}
                />
              </View>

              <View
                style={{
                  width: "auto",
                  borderWidth: 4,
                  borderColor: "lightblue",
                  borderRadius: "100%",
                  padding: 8,
                }}
              >
                <Image
                  style={{ width: 80, height: 80, borderRadius: "100%" }}
                  source={{
                    uri: "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
                  }}
                />
              </View>

              <View
                style={{
                  width: "auto",
                  borderWidth: 4,
                  borderColor: "lightblue",
                  borderRadius: "100%",
                  padding: 8,
                }}
              >
                <Image
                  style={{ width: 80, height: 80, borderRadius: "100%" }}
                  source={{
                    uri: "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
                  }}
                />
              </View>

              <View
                style={{
                  width: "auto",
                  borderWidth: 4,
                  borderColor: "lightblue",
                  borderRadius: "100%",
                  padding: 8,
                }}
              >
                <Image
                  style={{ width: 80, height: 80, borderRadius: "100%" }}
                  source={{
                    uri: "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
                  }}
                />
              </View>

              <View
                style={{
                  width: "auto",
                  borderWidth: 4,
                  borderColor: "lightblue",
                  borderRadius: "100%",
                  padding: 8,
                }}
              >
                <Image
                  style={{ width: 80, height: 80, borderRadius: "100%" }}
                  source={{
                    uri: "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
                  }}
                />
              </View>

              <View
                style={{
                  width: "auto",
                  borderWidth: 4,
                  borderColor: "lightblue",
                  borderRadius: "100%",
                  padding: 8,
                }}
              >
                <Image
                  style={{ width: 80, height: 80, borderRadius: "100%" }}
                  source={{
                    uri: "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
                  }}
                />
              </View>
            </XStack>
          </ScrollView>

          <XStack
            style={{
              padding: 15,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: 14,
            }}
          >
            <View
              style={{
                borderWidth: 4,
                borderColor: "lightblue",
                borderRadius: "100%",
                padding: 4,
              }}
            >
              <FontAwesome5 name="check" size={17} color="lightblue" />
            </View>

            <Text>
              You've seen all new posts from the past 3 days from accounts you
              follow.
            </Text>
          </XStack>

          <XStack
            style={{
              padding: 15,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <H3>Suggested for you</H3>
            <Text style={{ color: "lightblue" }}>Older posts</Text>
          </XStack>

          <YStack
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <YStack
              style={{
                width: "100%",
                paddingBottom: 10,
              }}
            >
              <XStack
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 15,
                }}
              >
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 10,
                  }}
                >
                  <View
                    style={{
                      borderWidth: 2,
                      borderColor: "lightblue",
                      borderRadius: "100%",
                      padding: 3,
                      width: "auto",
                    }}
                  >
                    <Image
                      style={{ width: 40, height: 40, borderRadius: "100%" }}
                      source={{
                        uri: "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
                      }}
                    />
                  </View>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text>LalanLala</Text>
                    <Text>Suggedsted for you</Text>
                  </View>
                </View>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Pressable
                    style={{
                      backgroundColor: "gray",
                      padding: 4,
                      borderRadius: 4,
                    }}
                  >
                    <Text>Follow</Text>
                  </Pressable>

                  <Text>:</Text>
                </View>
              </XStack>

              <Image
                style={{ width: 400, height: 400 }}
                source={{
                  uri: "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
                }}
              />

              <XStack
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 15,
                }}
              >
                <XStack
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 14,
                  }}
                >
                  <FontAwesome name="heart-o" size={28} color="white" />
                  <FontAwesome name="comment-o" size={28} color="white" />
                  <FontAwesome name="paper-plane-o"  size={28} color="white" />

                </XStack>

                <View>
                  <FontAwesome name="bookmark-o"  size={25} color="white" />
                </View>
              </XStack>

              <XStack
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: 6,
                  paddingLeft: 15,
                }}
              >
                <Image
                  style={{ width: 20, height: 20, borderRadius: "100%" }}
                  source={{
                    uri: "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
                  }}
                />
                <Text>
                  Liked by <Text style={{ fontWeight: "bold" }}>siapa ya</Text>{" "}
                  and <Text style={{ fontWeight: "bold" }}>653.201 more</Text>
                </Text>
              </XStack>

              <YStack
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  gap: 8,
                  padding: 15,
                }}
              >
                <Text>
                  <Text style={{ fontWeight: "bold" }}>LalanLala</Text> ini
                  caption lalalallalllalalalal
                </Text>
                <Text style={{ color: "gray" }}>See all 2.345 comments</Text>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>LeviAckerman</Text>{" "}
                  wokwokwokwokwowkowk lucu cik
                </Text>

                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 10,
                  }}
                >
                  <Image
                    style={{ width: 30, height: 30, borderRadius: "100%" }}
                    source={{
                      uri: "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg",
                    }}
                  />
                  {/* <TextInput placeholder="Add new comment" /> */}
                  <Text>Add new comment...</Text>
                </View>
              </YStack>
            </YStack>
          </YStack>
        </ScrollView>

        <XStack style={{ 
          position: "absolute",
          bottom: 0,
          backgroundColor: "black",
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          paddingTop: 15,
          paddingBottom: 15
         }}>
          <FontAwesome name="home" size={30} color="white" />  
          <FontAwesome name="search" size={30} color="white" />  
          <FontAwesome name="plus-square-o" size={30} color="white" />  
          <FontAwesome name="video-camera" size={30} color="white" />  
          <Image style={{ width: 30, height: 30, borderRadius: "100%" }} source={{ uri: "https://i.pinimg.com/736x/e8/02/e7/e802e799104b921a6b6520b01032abd4.jpg" }} />
        </XStack>

        {/* <ScrollView>
          <YStack>
            <View>
              <XStack
                justifyContent="space-between"
                backgroundColor={"white"}
                marginTop={34}
                alignItems="center"
              >
                <XStack>
                  <Text
                    textAlign="center"
                    fontSize={32}
                    padding={4}
                    fontFamily="styleScript"
                    color={"black"}
                  >
                    Instagram
                  </Text>
                  <AntDesign
                    padding={5}
                    name="down"
                    size={18}
                    color="black"
                    marginTop={18}
                  />
                </XStack>
                <XStack alignItems="center" paddingRight={10} gap={16}>
                  <AntDesign name="heart" size={28} color="black" />
                  <Entypo name="notification" size={28} color="black" />
                </XStack>
              </XStack>
              <ScrollView horizontal={true}>
                <XStack
                  flexDirection={"row"}
                  height={100}
                  alignItems="center"
                  backgroundColor={"white"}
                  gap={5}
                >
                  {story.map((data) => {
                    return (
                      <View
                        padding={10}
                        borderBlockColor={"black"}
                        borderWidth={3}
                        borderRadius={64}
                        paddingInline={10}
                        width={90}
                        margin={4}
                        alignItems="center"
                      >
                        <FontAwesome5
                          name={data.logo}
                          size={60}
                          color="black"
                        />
                      </View>
                    );
                  })}
                </XStack>
              </ScrollView>
              <XStack
                backgroundColor={"white"}
                padding={10}
                alignItems="center"
                justifyContent="space-between"
              >
                <View borderWidth={2} borderRadius={24} padding={5}>
                  <MaterialCommunityIcons
                    name="check"
                    size={24}
                    color="black"
                  />
                </View>
                <Text color={"gray"}>
                  You've seen all new posts from the pass days from account you
                  follow
                </Text>
              </XStack>
              <XStack
                backgroundColor={"white"}
                justifyContent="space-between"
                alignItems="center"
                padding={5}
              >
                <Text color={"black"} fontSize={24}>
                  Sugguested for you
                </Text>
                <Text color={"skyblue"} fontSize={14}>
                  Older posts
                </Text>
              </XStack>
              {FEEDS_DATA.map((post) => {
                return (
                  <View>
                    <XStack
                      backgroundColor={"white"}
                      justifyContent="space-between"
                    >
                      <XStack alignItems="center" padding={5}>
                        <Image
                          borderRadius={25}
                          source={{
                            uri: post.imageUrl,
                            width: 50,
                            height: 50,
                          }}
                        />
                        <Text paddingLeft={5} color={"black"}>
                          {post.username}
                        </Text>
                      </XStack>
                      <XStack alignItems="center">
                        <Button backgroundColor={"skyblue"}>
                          <Label>Follow</Label>
                        </Button>
                        <Entypo
                          name="dots-three-vertical"
                          size={24}
                          color="black"
                        />
                      </XStack>
                    </XStack>
                    <Image
                      source={{
                        uri: post.feed.imageUrl,
                        height: 500,
                      }}
                    />
                    <XStack
                      backgroundColor={"white"}
                      padding={5}
                      justifyContent="space-between"
                    >
                      <XStack gap={5}>
                        <AntDesign name="hearto" size={24} color="black" />
                        <EvilIcons name="comment" size={24} color="black" />
                        <Entypo name="paper-plane" size={24} color="black" />
                      </XStack>
                      <XStack>
                        <Feather name="bookmark" size={24} color="black" />
                      </XStack>
                    </XStack>
                    <XStack backgroundColor={"white"} paddingLeft={5}>
                      <Text color={"black"} numberOfLines={2}>
                        {post.feed.totalLikes} Likes
                      </Text>
                    </XStack>
                    <YStack backgroundColor={"white"} paddingLeft={5}>
                      <Text>
                        <Text
                          style={{
                            fontWeight: "bold",
                            marginRight: 5,
                            color: "black",
                          }}
                        >
                          {post.username}
                        </Text>
                        <Text numberOfLines={2} style={{ color: "black" }}>
                          {post.feed.caption}
                        </Text>
                      </Text>
                      <Text color={"black"}>
                        View all {post.feed.totalComments}
                      </Text>
                      <Text color={"black"}>
                        {formatDate(post.feed.postDate)}
                      </Text>
                    </YStack>
                  </View>
                );
              })}
            </View>
            <View height={50}></View>
          </YStack>
        </ScrollView>
        <XStack
          justifyContent="space-around"
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          backgroundColor="white"
          padding={10}
          zIndex={1000}
        >
          <Entypo name="home" size={24} color="black" />
          <FontAwesome5 name="search" size={30} color="black" />
          <FontAwesome name="plus-square" size={30} color="black" />
          <Entypo name="folder-video" size={30} color="black" />
          <MaterialCommunityIcons
            name="face-man-profile"
            size={24}
            color="black"
          />
        </XStack> */}
      </TamaguiProvider>
    </SafeAreaView>
  );
};

export default App;
