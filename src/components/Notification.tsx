import * as Linking from "expo-linking";
import { Ionicons } from "@expo/vector-icons";
import { OSNotification } from "react-native-onesignal";
import {
  Icon,
  Text,
  HStack,
  CloseIcon,
  Pressable,
  IconButton,
} from "native-base";

type Props = {
  data: OSNotification;
  onClose: () => void;
};

export function Notification({ data, onClose }: Props) {
  console.log(data)

  const { launchURL, title } = data;

  function handleOnPress() {
    if (launchURL) {
      Linking.openURL(launchURL);
      onClose();
    }
  }

  return (
    <Pressable
      w="full"
      p={4}
      pt={12}
      bgColor="gray.200"
      position="absolute"
      top={0}
      onPress={handleOnPress}
    >
      <HStack justifyContent="space-between" alignItems="center">
        <Icon
          as={Ionicons}
          name="notifications-outline"
          size={5}
          color="black"
          mr={2}
        />

        <Text fontSize="md" color="black" flex={1}>
          {title}
        </Text>

        <IconButton
          variant="unstyled"
          _focus={{ borderWidth: 0 }}
          icon={<CloseIcon size="3" />}
          _icon={{ color: "coolGray.600" }}
          color="black"
          onPress={onClose}
        />
      </HStack>
    </Pressable>
  );
}
