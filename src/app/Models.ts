
export interface RedditPostData{

  /*custom fields*/
  imageExists?:boolean,

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

export interface SubRedditData  {
  "suggested_comment_sort"? : null,
  "hide_ads"? : boolean,
  "banner_img"? : string,
  "user_sr_theme_enabled"? : true,
  "user_flair_text"? : null,
  "submit_text_html"? : string,
  "user_is_banned"? : boolean,
  "wiki_enabled"? : true,
  "show_media"? : true,
  "id"? : string,
  "display_name_prefixed"? : string,
  "submit_text"? : string,
  "user_can_flair_in_sr"? : boolean,
  "display_name"? : string,
  "header_img"? : string,
  "description_html"? : string,
  "title"? : string,
  "collapse_deleted_comments"? : boolean,
  "user_has_favorited"? : boolean,
  "show_media_preview"? : true,
  "over18"? : boolean,
  "public_description_html"? : string,
  "allow_videos"? : true,
  "spoilers_enabled"? : true,
  "icon_size"? : null,
  "audience_target"? : string,
  "notification_level"? : null,
  "active_user_count"? : number,
  "icon_img"? : string,
  "header_title"? : string,
  "description"? : string,
  "user_is_muted"? : boolean,
  "submit_link_label"? : null,
  "accounts_active"? : boolean,
  "public_traffic"? : boolean,
  "header_size"? : number[],
  "subscribers"? : number,
  "user_flair_css_class"? : null,
  "submit_text_label"? : null,
  "whitelist_status"? : string,
  "user_sr_flair_enabled"? : null,
  "lang"? : string,
  "user_is_moderator"? : boolean,
  "is_enrolled_in_new_modmail"? : boolean,
  "key_color"? : string,
  "name"? : string,
  "user_flair_enabled_in_sr"? : boolean,
  "allow_videogifs"? : true,
  "url"? : string,
  "quarantine"? : boolean,
  "created"? : number,
  "created_utc"? : number,
  "banner_size"? : null,
  "user_is_contributor"? : boolean,
  "allow_discovery"? : true,
  "accounts_active_is_fuzzed"? : boolean,
  "advertiser_category"? : null,
  "public_description"? : string,
  "link_flair_enabled"? : true,
  "allow_images"? : true,
  "videostream_links_count"? : number,
  "comment_score_hide_mins"? : number,
  "subreddit_type"? : string,
  "submission_type"? : string,
  "user_is_subscriber"? : boolean
}
export interface SubRedditWrapper  {
  "kind"? : string,
  "data"? : SubRedditData
}
// export interface SubRedditWrapper {
//   "kind"? :string,
//   "data"? : SubRedditData[]
// }
export interface SubRedditResultList {
  "kind"?: string,
  "data"?: {
    after:string,
    before:string,
    dist:number,
    modhash:string,
    kind:string,
    children:Array<{data:SubRedditData, kind:string}>
  }
}

export interface CommentData {
  "subreddit_id"?: string,
  "approved_at_utc"?: null,
  "ups"?: number,
  "mod_reason_by"?: null,
  "banned_by"?: null,
  "removal_reason"?: null,
  "link_id"?: string,
  "likes"?: null,
  "no_follow"?: true,
  "replies"?: {
    "kind"?: string,
    "data"?: {
      "after"?: null,
      "whitelist_status"?: string,
      "modhash"?: string,
      "dist"?: null,
      "children"?: [
        {
          "kind"?: string,
          "data"?: {
            "subreddit_id"?: string,
            "approved_at_utc"?: null,
            "ups"?: number,
            "mod_reason_by"?: null,
            "banned_by"?: null,
            "removal_reason"?: null,
            "link_id"?: string,
            "likes"?: null,
            "no_follow"?: false,
            "replies"?: {
              "kind"?: string,
              "data"?: {
                "after"?: null,
                "whitelist_status"?: string,
                "modhash"?: string,
                "dist"?: null,
                "children"?: [
                  {
                    "kind"?: string,
                    "data"?: {
                      "count"?: number,
                      "name"?: string,
                      "id"?: string,
                      "parent_id"?: string,
                      "depth"?: number,
                      "children"?: Array<string>
                    }
                  }
                  ],
                "before"?: null
              }
            },
            "user_reports"?: Array<any>,
            "saved"?: false,
            "id"?: string,
            "banned_at_utc"?: null,
            "mod_reason_title"?: null,
            "gilded"?: number,
            "archived"?: true,
            "report_reasons"?: null,
            "author"?: string,
            "can_mod_post"?: false,
            "send_replies"?: true,
            "parent_id"?: string,
            "score"?: number,
            "approved_by"?: null,
            "downs"?: number,
            "body"?: string,
            "edited"?: false,
            "author_flair_css_class"?: null,
            "collapsed"?: false,
            "is_submitter"?: false,
            "collapsed_reason"?: null,
            "body_html"?: string,
            "subreddit_type"?: string,
            "can_gild"?: true,
            "subreddit"?: string,
            "name"?: string,
            "score_hidden"?: false,
            "permalink"?: string,
            "num_reports"?: null,
            "stickied"?: false,
            "created"?: number,
            "author_flair_text"?: null,
            "created_utc"?: number,
            "subreddit_name_prefixed"?: string,
            "controversiality"?: 0,
            "depth"?: 1,
            "mod_reports"?: Array<any>,
            "mod_note"?: null,
            "distinguished"?: null
          }
        }
        ],
      "before"?: null
    }
  },
  "user_reports"?: Array<any>,
  "saved"?: false,
  "id"?: string,
  "banned_at_utc"?: null,
  "mod_reason_title"?: null,
  "gilded"?: number,
  "archived"?: true,
  "report_reasons"?: null,
  "author"?: string,
  "can_mod_post"?: false,
  "send_replies"?: true,
  "parent_id"?: string,
  "score"?: number,
  "approved_by"?: null,
  "downs"?: number,
  "body"?: string,
  "edited"?: false,
  "author_flair_css_class"?: null,
  "collapsed"?: false,
  "is_submitter"?: false,
  "collapsed_reason"?: null,
  "body_html"?: string,
  "subreddit_type"?: string,
  "can_gild"?: true,
  "subreddit"?: string,
  "name"?: string,
  "score_hidden"?: false,
  "permalink"?: string,
  "num_reports"?: null,
  "stickied"?: false,
  "created"?: number,
  "author_flair_text"?: null,
  "created_utc"?: number,
  "subreddit_name_prefixed"?: string,
  "controversiality"?: number,
  "depth"?: number,
  "mod_reports"?: Array<any>,
  "mod_note"?: null,
  "distinguished"?: null
}
export interface CommentDataWrapper {
  "kind"?: string,
  "data"?: CommentData
}

export interface RedditCommentResult
{
  "kind"?: string,
  "data"?: {
    "after"?: null,
    "whitelist_status"?: string,
    "modhash"?: string,
    "dist"?: null,
    "children"?: CommentDataWrapper[]
    "before"?: null
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
