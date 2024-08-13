import {
  EmailShareButton,
  FacebookShareButton,
  GabShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  GabIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
  XIcon,
} from "react-share";

export default function MyShare() {
  let shareUrl = window?.location.href;

  return (
    <>
      <WhatsappShareButton url={shareUrl} title={"this is title"}>
        <WhatsappIcon />
      </WhatsappShareButton>
      <EmailShareButton url={shareUrl} title={"this is title"}>
        <EmailIcon />
      </EmailShareButton>
      <TelegramShareButton url={shareUrl} title={"this is title"}>
        <TelegramIcon />
      </TelegramShareButton>
    </>
  );
}
