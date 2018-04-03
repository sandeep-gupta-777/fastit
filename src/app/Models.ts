
export interface RedditPostData{

  "subreddit_id"?: string,
  "approved_at_utc"?: string,
  "send_replies"?: boolean,
  "mod_reason_by"?: string,
  "banned_by"?: string,
  "num_reports"?: string,
  "removal_reason"?: string,
  "thumbnail_width"?: string,
  "subreddit"?: string,
  "selftext_html"?: string,
  "selftext"?: string,
  "likes"?: string,
  "suggested_sort"?: string,
  "user_reports"?: Array<any>,
  "secure_media"?: string,
  "is_reddit_media_domain"?: boolean,
  "saved"?: boolean,
  "id"?: string,
  "banned_at_utc"?: string,
  "mod_reason_title"?: string,
  "view_count"?: string,
  "archived"?: boolean,
  "clicked"?: boolean,
  "no_follow"?: boolean,
  "author"?: string,
  "num_crossposts"?: number,
  "link_flair_text"?: string,
  "mod_reports"?: Array<any>,
  "can_mod_post"?: boolean,
  "is_crosspostable"?: boolean,
  "pinned"?: boolean,
  "score"?: number,
  "approved_by"?: string,
  "over_18"?: boolean,
  "report_reasons"?: string,
  "domain"?: string,
  "hidden"?: boolean,
  "thumbnail"?: string,
  "edited"?: number,
  "link_flair_css_class"?: string,
  "author_flair_css_class"?: string,
  "contest_mode"?: boolean,
  "gilded"?: number,
  "downs"?: number,
  "brand_safe"?: boolean,
  "secure_media_embed"?: object,
  "media_embed"?: object,
  "author_flair_text"?: string,
  "stickied"?: boolean,
  "visited"?: boolean,
  "can_gild"?: boolean,
  "thumbnail_height"?: string,
  "parent_whitelist_status"?: string,
  "name"?: string,
  "spoiler"?: boolean,
  "permalink"?: string,
  "subreddit_type"?: string,
  "locked"?: boolean,
  "hide_score"?: boolean,
  "created"?: number,
  "url"?: string,
  "whitelist_status"?: string,
  "quarantine"?: boolean,
  "subreddit_subscribers"?: number,
  "created_utc"?: number,
  "subreddit_name_prefixed"?: string,
  "ups"?: number,
  "media"?: string,
  "num_comments"?: number,
  "is_self"?: boolean,
  "title"?: number,
  "mod_note"?: string,
  "is_video"?: boolean,
  "distinguished"?: string
}

export interface RedditPostWrapper {
  "kind": string,
  "data": RedditPostData
}
export interface RedditPostList {
  "kind": string,
  "data": {
    "after": string,
    "dist": number,
    "modhash": string,
    "whitelist_status": string,
    "children": RedditPostWrapper[],
    "before": string
  }
}




export interface CartisanUser {

  _id?:string,

  userCustomID?: string,
  userPassword?: string,
  userFullName?: string,
  userEmail?: string,
  userMobileNumber?: string,
  userRole?: string,

  userProfileID?: string,  userProfilePicURL?: string,  userVotes?: string[], userComments?: { comment: string; image: string }[],
  userUploaded?: string[],   userDateOfSignup?: Date,   userLastLogin?: Date
}

export interface CartisanOrder {//TODO: remove ?

  _id?:string,
  orderModelName?:string
  orderSerialNumber?: string,
  orderDate?: number,
  orderTitle?: string,
  orderHTML?:String,
  orderText?:String,
  orderAssignedBy_id?:string,
  orderAssignedBy_fullName?:string,
  orderAssignedTo_id?:string,
  orderAssignedTo_fullName?:string,
  orderEstimaterPrice?:String,
  orderAddress?:String,
  orderImageContainersArray?:OrderImageContainer[],
  orderPriceEstimationMode?:number,
  orderTotalPrice?:Number
}
export interface OrderImageContainer{
  orderImageURL?:String,
  orderImageTagArray?:ImageTagArray[],
  orderImagePrice?:number
}

export interface ImageTagArray{
  toolTipText?: String,
  toolTipTextVisible?: boolean,
  inputHidden: boolean,
  clientX?: number,
  clientY?: number
}
