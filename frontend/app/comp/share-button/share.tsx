import Link from "next/link";
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
import xlogo from "@/public/xlogo.png";
import Image from "next/image";

export default function MyShare() {
  let shareUrl = window?.location.href;

  return (
    <div className="flex gap-5 ">
      <WhatsappShareButton url={shareUrl} title={"this is title"}>
        <WhatsappIcon size={45} round={true} />
      </WhatsappShareButton>
      <EmailShareButton url={shareUrl} title={"this is title"}>
        <EmailIcon size={45} round={true} />
      </EmailShareButton>
      {/* <TelegramShareButton url={shareUrl} title={"this is title"}>
        <TelegramIcon size={45} round={true}/>
      </TelegramShareButton> */}
      <LinkedinShareButton url={shareUrl} title="">
        <LinkedinIcon size={45} round={true} />
      </LinkedinShareButton>
      <TwitterShareButton url={shareUrl} title="">
        {/* <Link href="https://x.com/">
          <div className="text-gray-600 hover:text-gray-800">
            <Image src={xlogo} alt="youtube" width={26} height={26} />
          </div>
        </Link> */}
        <XIcon size={45} round={true} />
      </TwitterShareButton>
    </div>
  );
}
