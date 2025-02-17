import { FaRegCompass } from "react-icons/fa";
import {
  HiHashtag,
  HiLockClosed,
  HiOutlineChat,
  HiSpeakerphone,
} from "react-icons/hi";
import { HiMiniChatBubbleLeftRight, HiCog6Tooth } from "react-icons/hi2";

import {
  bandit,
  gamer,
  gamerGirl,
  geek,
  hacker,
  king,
  otaku,
  steampunk,
  viking,
} from "../assets/avatars";

import type { ChannelType } from "../schema";
import { type IconType } from "react-icons";

export const NavLinks = [
  {
    href: "/",
    label: "Explore",
    icon: FaRegCompass,
  },
  {
    href: "/chat",
    label: "Chat",
    icon: HiOutlineChat,
  },

  {
    href: "/channels",
    label: "Channels",
    icon: HiHashtag,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: HiCog6Tooth,
  },
];

export const ChannelIcons: Record<ChannelType, IconType> = {
  public: HiHashtag,
  private: HiLockClosed,
  announcement: HiSpeakerphone,
  static: HiMiniChatBubbleLeftRight,
};

export const avatars = [
  bandit,
  gamer,
  gamerGirl,
  hacker,
  geek,
  king,
  viking,
  steampunk,
  otaku,
];

export enum AuthStatus {
  SignedIn = "signedIn",
  SignedOut = "signedOut",
  Idle = "idle",
}

export enum ChannelsStatus {
  Idle = "idle",
  Success = "success",
  Error = "error",
}
