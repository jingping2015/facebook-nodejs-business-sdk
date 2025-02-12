/**
 * Copyright (c) 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 * @flow
 */
import {AbstractCrudObject} from './../abstract-crud-object';
import AbstractObject from './../abstract-object';
import Cursor from './../cursor';
import PagePost from './page-post';
import Business from './business';
import Album from './album';
import AssignedUser from './assigned-user';
import Profile from './profile';
import PageCallToAction from './page-call-to-action';
import CanvasBodyElement from './canvas-body-element';
import Canvas from './canvas';
import URL from './url';
import UnifiedThread from './unified-thread';
import PageUserMessageThreadLabel from './page-user-message-thread-label';
import Event from './event';
import AdVideo from './ad-video';
import InsightsResult from './insights-result';
import PageInsightsAsyncExportRun from './page-insights-async-export-run';
import InstagramUser from './instagram-user';
import InstantArticle from './instant-article';
import InstantArticleInsightsQueryResult from './instant-article-insights-query-result';
import LeadgenForm from './leadgen-form';
import LiveEncoder from './live-encoder';
import LiveVideo from './live-video';
import MediaFingerprint from './media-fingerprint';
import MessagingFeatureReview from './messaging-feature-review';
import MessengerDestinationPageWelcomeMessage from './messenger-destination-page-welcome-message';
import MessengerProfile from './messenger-profile';
import NativeOffer from './native-offer';
import Persona from './persona';
import Photo from './photo';
import ProfilePictureSource from './profile-picture-source';
import PlaceTopic from './place-topic';
import ProductCatalog from './product-catalog';
import Recommendation from './recommendation';
import User from './user';
import RTBDynamicPost from './rtb-dynamic-post';
import Application from './application';
import PageSettings from './page-settings';
import VideoList from './video-list';
import Tab from './tab';
import PageThreadOwner from './page-thread-owner';
import EventTour from './event-tour';
import PageUpcomingChange from './page-upcoming-change';
import VideoCopyrightRule from './video-copyright-rule';
import VideoCopyright from './video-copyright';

/**
 * Page
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Page extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      about: 'about',
      access_token: 'access_token',
      ad_campaign: 'ad_campaign',
      affiliation: 'affiliation',
      app_id: 'app_id',
      app_links: 'app_links',
      artists_we_like: 'artists_we_like',
      attire: 'attire',
      awards: 'awards',
      band_interests: 'band_interests',
      band_members: 'band_members',
      best_page: 'best_page',
      bio: 'bio',
      birthday: 'birthday',
      booking_agent: 'booking_agent',
      built: 'built',
      business: 'business',
      can_checkin: 'can_checkin',
      can_post: 'can_post',
      category: 'category',
      category_list: 'category_list',
      checkins: 'checkins',
      company_overview: 'company_overview',
      connected_instagram_account: 'connected_instagram_account',
      contact_address: 'contact_address',
      copyright_whitelisted_ig_partners: 'copyright_whitelisted_ig_partners',
      country_page_likes: 'country_page_likes',
      cover: 'cover',
      culinary_team: 'culinary_team',
      current_location: 'current_location',
      description: 'description',
      description_html: 'description_html',
      directed_by: 'directed_by',
      display_subtext: 'display_subtext',
      displayed_message_response_time: 'displayed_message_response_time',
      emails: 'emails',
      engagement: 'engagement',
      fan_count: 'fan_count',
      featured_video: 'featured_video',
      features: 'features',
      food_styles: 'food_styles',
      founded: 'founded',
      general_info: 'general_info',
      general_manager: 'general_manager',
      genre: 'genre',
      global_brand_page_name: 'global_brand_page_name',
      global_brand_root_id: 'global_brand_root_id',
      has_added_app: 'has_added_app',
      has_whatsapp_business_number: 'has_whatsapp_business_number',
      has_whatsapp_number: 'has_whatsapp_number',
      hometown: 'hometown',
      hours: 'hours',
      id: 'id',
      impressum: 'impressum',
      influences: 'influences',
      instagram_business_account: 'instagram_business_account',
      instant_articles_review_status: 'instant_articles_review_status',
      is_always_open: 'is_always_open',
      is_chain: 'is_chain',
      is_community_page: 'is_community_page',
      is_eligible_for_branded_content: 'is_eligible_for_branded_content',
      is_messenger_bot_get_started_enabled: 'is_messenger_bot_get_started_enabled',
      is_messenger_platform_bot: 'is_messenger_platform_bot',
      is_owned: 'is_owned',
      is_permanently_closed: 'is_permanently_closed',
      is_published: 'is_published',
      is_unclaimed: 'is_unclaimed',
      is_verified: 'is_verified',
      is_webhooks_subscribed: 'is_webhooks_subscribed',
      keywords: 'keywords',
      leadgen_form_preview_details: 'leadgen_form_preview_details',
      leadgen_tos_acceptance_time: 'leadgen_tos_acceptance_time',
      leadgen_tos_accepted: 'leadgen_tos_accepted',
      leadgen_tos_accepting_user: 'leadgen_tos_accepting_user',
      link: 'link',
      location: 'location',
      members: 'members',
      merchant_id: 'merchant_id',
      merchant_review_status: 'merchant_review_status',
      messenger_ads_default_icebreakers: 'messenger_ads_default_icebreakers',
      messenger_ads_default_page_welcome_message: 'messenger_ads_default_page_welcome_message',
      messenger_ads_default_quick_replies: 'messenger_ads_default_quick_replies',
      messenger_ads_quick_replies_type: 'messenger_ads_quick_replies_type',
      mission: 'mission',
      mpg: 'mpg',
      name: 'name',
      name_with_location_descriptor: 'name_with_location_descriptor',
      network: 'network',
      new_like_count: 'new_like_count',
      offer_eligible: 'offer_eligible',
      overall_star_rating: 'overall_star_rating',
      page_about_story: 'page_about_story',
      page_token: 'page_token',
      parent_page: 'parent_page',
      parking: 'parking',
      payment_options: 'payment_options',
      personal_info: 'personal_info',
      personal_interests: 'personal_interests',
      pharma_safety_info: 'pharma_safety_info',
      phone: 'phone',
      place_type: 'place_type',
      plot_outline: 'plot_outline',
      preferred_audience: 'preferred_audience',
      press_contact: 'press_contact',
      price_range: 'price_range',
      privacy_info_url: 'privacy_info_url',
      produced_by: 'produced_by',
      products: 'products',
      promotion_eligible: 'promotion_eligible',
      promotion_ineligible_reason: 'promotion_ineligible_reason',
      public_transit: 'public_transit',
      rating_count: 'rating_count',
      recipient: 'recipient',
      record_label: 'record_label',
      release_date: 'release_date',
      restaurant_services: 'restaurant_services',
      restaurant_specialties: 'restaurant_specialties',
      schedule: 'schedule',
      screenplay_by: 'screenplay_by',
      season: 'season',
      single_line_address: 'single_line_address',
      starring: 'starring',
      start_info: 'start_info',
      store_code: 'store_code',
      store_location_descriptor: 'store_location_descriptor',
      store_number: 'store_number',
      studio: 'studio',
      supports_instant_articles: 'supports_instant_articles',
      talking_about_count: 'talking_about_count',
      unread_message_count: 'unread_message_count',
      unread_notif_count: 'unread_notif_count',
      unseen_message_count: 'unseen_message_count',
      username: 'username',
      verification_status: 'verification_status',
      voip_info: 'voip_info',
      website: 'website',
      were_here_count: 'were_here_count',
      whatsapp_number: 'whatsapp_number',
      written_by: 'written_by',
    });
  }

  static get Attire (): Object {
    return Object.freeze({
      casual: 'Casual',
      dressy: 'Dressy',
      unspecified: 'Unspecified',
    });
  }
  static get FoodStyles (): Object {
    return Object.freeze({
      afghani: 'Afghani',
      american_new_: 'American (New)',
      american_traditional_: 'American (Traditional)',
      asian_fusion: 'Asian Fusion',
      barbeque: 'Barbeque',
      brazilian: 'Brazilian',
      breakfast: 'Breakfast',
      british: 'British',
      brunch: 'Brunch',
      buffets: 'Buffets',
      burgers: 'Burgers',
      burmese: 'Burmese',
      cajun_creole: 'Cajun/Creole',
      caribbean: 'Caribbean',
      chinese: 'Chinese',
      creperies: 'Creperies',
      cuban: 'Cuban',
      delis: 'Delis',
      diners: 'Diners',
      ethiopian: 'Ethiopian',
      fast_food: 'Fast Food',
      filipino: 'Filipino',
      fondue: 'Fondue',
      food_stands: 'Food Stands',
      french: 'French',
      german: 'German',
      greek_and_mediterranean: 'Greek and Mediterranean',
      hawaiian: 'Hawaiian',
      himalayan_nepalese: 'Himalayan/Nepalese',
      hot_dogs: 'Hot Dogs',
      indian_pakistani: 'Indian/Pakistani',
      irish: 'Irish',
      italian: 'Italian',
      japanese: 'Japanese',
      korean: 'Korean',
      latin_american: 'Latin American',
      mexican: 'Mexican',
      middle_eastern: 'Middle Eastern',
      moroccan: 'Moroccan',
      pizza: 'Pizza',
      russian: 'Russian',
      sandwiches: 'Sandwiches',
      seafood: 'Seafood',
      singaporean: 'Singaporean',
      soul_food: 'Soul Food',
      southern: 'Southern',
      spanish_basque: 'Spanish/Basque',
      steakhouses: 'Steakhouses',
      sushi_bars: 'Sushi Bars',
      taiwanese: 'Taiwanese',
      tapas_bars: 'Tapas Bars',
      tex_mex: 'Tex-Mex',
      thai: 'Thai',
      turkish: 'Turkish',
      vegan: 'Vegan',
      vegetarian: 'Vegetarian',
      vietnamese: 'Vietnamese',
    });
  }
  static get PermittedTasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      create_content: 'CREATE_CONTENT',
      manage: 'MANAGE',
      manage_jobs: 'MANAGE_JOBS',
      manage_leads: 'MANAGE_LEADS',
      moderate: 'MODERATE',
      moderate_community: 'MODERATE_COMMUNITY',
      pages_messaging: 'PAGES_MESSAGING',
      pages_messaging_subscriptions: 'PAGES_MESSAGING_SUBSCRIPTIONS',
      platform_manage_pages: 'PLATFORM_MANAGE_PAGES',
      platform_pages_manage_instant_articles: 'PLATFORM_PAGES_MANAGE_INSTANT_ARTICLES',
      platform_read_insights: 'PLATFORM_READ_INSIGHTS',
      read_page_mailboxes: 'READ_PAGE_MAILBOXES',
      view_monetization_insights: 'VIEW_MONETIZATION_INSIGHTS',
    });
  }
  static get Tasks (): Object {
    return Object.freeze({
      advertise: 'ADVERTISE',
      analyze: 'ANALYZE',
      create_content: 'CREATE_CONTENT',
      manage: 'MANAGE',
      manage_jobs: 'MANAGE_JOBS',
      manage_leads: 'MANAGE_LEADS',
      moderate: 'MODERATE',
      moderate_community: 'MODERATE_COMMUNITY',
      pages_messaging: 'PAGES_MESSAGING',
      pages_messaging_subscriptions: 'PAGES_MESSAGING_SUBSCRIPTIONS',
      platform_manage_pages: 'PLATFORM_MANAGE_PAGES',
      platform_pages_manage_instant_articles: 'PLATFORM_PAGES_MANAGE_INSTANT_ARTICLES',
      platform_read_insights: 'PLATFORM_READ_INSIGHTS',
      read_page_mailboxes: 'READ_PAGE_MAILBOXES',
      view_monetization_insights: 'VIEW_MONETIZATION_INSIGHTS',
    });
  }
  static get PublishStatus (): Object {
    return Object.freeze({
      draft: 'DRAFT',
      live: 'LIVE',
    });
  }
  static get MessagingType (): Object {
    return Object.freeze({
      message_tag: 'MESSAGE_TAG',
      response: 'RESPONSE',
      update: 'UPDATE',
    });
  }
  static get NotificationType (): Object {
    return Object.freeze({
      no_push: 'NO_PUSH',
      regular: 'REGULAR',
      silent_push: 'SILENT_PUSH',
    });
  }
  static get SenderAction (): Object {
    return Object.freeze({
      mark_seen: 'MARK_SEEN',
      typing_off: 'TYPING_OFF',
      typing_on: 'TYPING_ON',
    });
  }
  static get Type (): Object {
    return Object.freeze({
      ref: 'REF',
      standard: 'STANDARD',
    });
  }
  static get Model (): Object {
    return Object.freeze({
      arabic: 'ARABIC',
      chinese: 'CHINESE',
      croatian: 'CROATIAN',
      custom: 'CUSTOM',
      danish: 'DANISH',
      dutch: 'DUTCH',
      english: 'ENGLISH',
      french_standard: 'FRENCH_STANDARD',
      georgian: 'GEORGIAN',
      german_standard: 'GERMAN_STANDARD',
      greek: 'GREEK',
      hebrew: 'HEBREW',
      hungarian: 'HUNGARIAN',
      irish: 'IRISH',
      italian_standard: 'ITALIAN_STANDARD',
      korean: 'KOREAN',
      norwegian_bokmal: 'NORWEGIAN_BOKMAL',
      polish: 'POLISH',
      portuguese: 'PORTUGUESE',
      romanian: 'ROMANIAN',
      spanish: 'SPANISH',
      swedish: 'SWEDISH',
      vietnamese: 'VIETNAMESE',
    });
  }
  static get SubscribedFields (): Object {
    return Object.freeze({
      affiliation: 'affiliation',
      attire: 'attire',
      awards: 'awards',
      bio: 'bio',
      birthday: 'birthday',
      branded_camera: 'branded_camera',
      category: 'category',
      checkins: 'checkins',
      commerce_order: 'commerce_order',
      company_overview: 'company_overview',
      conversations: 'conversations',
      culinary_team: 'culinary_team',
      current_location: 'current_location',
      description: 'description',
      email: 'email',
      feature_access_list: 'feature_access_list',
      feed: 'feed',
      founded: 'founded',
      general_info: 'general_info',
      general_manager: 'general_manager',
      hometown: 'hometown',
      hours: 'hours',
      invoice_access_invoice_change: 'invoice_access_invoice_change',
      leadgen: 'leadgen',
      leadgen_fat: 'leadgen_fat',
      live_videos: 'live_videos',
      location: 'location',
      mcom_invoice_change: 'mcom_invoice_change',
      members: 'members',
      mention: 'mention',
      merchant_review: 'merchant_review',
      message_deliveries: 'message_deliveries',
      message_echoes: 'message_echoes',
      message_mention: 'message_mention',
      message_reactions: 'message_reactions',
      message_reads: 'message_reads',
      messages: 'messages',
      messaging_account_linking: 'messaging_account_linking',
      messaging_appointments: 'messaging_appointments',
      messaging_checkout_updates: 'messaging_checkout_updates',
      messaging_direct_sends: 'messaging_direct_sends',
      messaging_game_plays: 'messaging_game_plays',
      messaging_handovers: 'messaging_handovers',
      messaging_optins: 'messaging_optins',
      messaging_optouts: 'messaging_optouts',
      messaging_page_feedback: 'messaging_page_feedback',
      messaging_payments: 'messaging_payments',
      messaging_policy_enforcement: 'messaging_policy_enforcement',
      messaging_postbacks: 'messaging_postbacks',
      messaging_pre_checkouts: 'messaging_pre_checkouts',
      messaging_referrals: 'messaging_referrals',
      mission: 'mission',
      name: 'name',
      page_about_story: 'page_about_story',
      page_change_proposal: 'page_change_proposal',
      page_upcoming_change: 'page_upcoming_change',
      parking: 'parking',
      payment_options: 'payment_options',
      personal_info: 'personal_info',
      personal_interests: 'personal_interests',
      phone: 'phone',
      picture: 'picture',
      price_range: 'price_range',
      product_review: 'product_review',
      products: 'products',
      public_transit: 'public_transit',
      publisher_subscriptions: 'publisher_subscriptions',
      ratings: 'ratings',
      registration: 'registration',
      standby: 'standby',
      video_text_question_responses: 'video_text_question_responses',
      videos: 'videos',
      website: 'website',
    });
  }
  static get DomainActionType (): Object {
    return Object.freeze({
      add: 'ADD',
      remove: 'REMOVE',
    });
  }
  static get PaymentDevModeAction (): Object {
    return Object.freeze({
      add: 'ADD',
      remove: 'REMOVE',
    });
  }
  static get SettingType (): Object {
    return Object.freeze({
      account_linking: 'ACCOUNT_LINKING',
      call_to_actions: 'CALL_TO_ACTIONS',
      domain_whitelisting: 'DOMAIN_WHITELISTING',
      greeting: 'GREETING',
      payment: 'PAYMENT',
    });
  }
  static get ThreadState (): Object {
    return Object.freeze({
      existing_thread: 'EXISTING_THREAD',
      new_thread: 'NEW_THREAD',
    });
  }

  getAdsPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/ads_posts'
    );
  }

  deleteAgencies (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/agencies',
      params
    );
  }

  getAgencies (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Business,
      fields,
      params,
      fetchFirstPage,
      '/agencies'
    );
  }

  createAgency (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/agencies',
      fields,
      params,
      Page
    );
  }

  getAlbums (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Album,
      fields,
      params,
      fetchFirstPage,
      '/albums'
    );
  }

  createAlbum (fields: Array<string>, params: Object = {}): Promise<Album> {
    return this.createEdge(
      '/albums',
      fields,
      params,
      Album
    );
  }

  deleteAssignedUsers (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/assigned_users',
      params
    );
  }

  getAssignedUsers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AssignedUser,
      fields,
      params,
      fetchFirstPage,
      '/assigned_users'
    );
  }

  createAssignedUser (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/assigned_users',
      fields,
      params,
      Page
    );
  }

  deleteBlocked (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/blocked',
      params
    );
  }

  getBlocked (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/blocked'
    );
  }

  createBlocked (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/blocked',
      fields,
      params,
      
    );
  }

  getCallToActions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PageCallToAction,
      fields,
      params,
      fetchFirstPage,
      '/call_to_actions'
    );
  }

  createCallToAction (fields: Array<string>, params: Object = {}): Promise<PageCallToAction> {
    return this.createEdge(
      '/call_to_actions',
      fields,
      params,
      PageCallToAction
    );
  }

  getCanvasElements (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      CanvasBodyElement,
      fields,
      params,
      fetchFirstPage,
      '/canvas_elements'
    );
  }

  createCanvasElement (fields: Array<string>, params: Object = {}): Promise<CanvasBodyElement> {
    return this.createEdge(
      '/canvas_elements',
      fields,
      params,
      CanvasBodyElement
    );
  }

  getCanvases (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Canvas,
      fields,
      params,
      fetchFirstPage,
      '/canvases'
    );
  }

  createCanvase (fields: Array<string>, params: Object = {}): Promise<Canvas> {
    return this.createEdge(
      '/canvases',
      fields,
      params,
      Canvas
    );
  }

  deleteClaimedUrls (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/claimed_urls',
      params
    );
  }

  getClaimedUrls (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      URL,
      fields,
      params,
      fetchFirstPage,
      '/claimed_urls'
    );
  }

  createClaimedUrl (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/claimed_urls',
      fields,
      params,
      Page
    );
  }

  getConversations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UnifiedThread,
      fields,
      params,
      fetchFirstPage,
      '/conversations'
    );
  }

  createCopyrightManualClaim (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/copyright_manual_claims',
      fields,
      params,
      
    );
  }

  getCopyrightWhitelistedPartners (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/copyright_whitelisted_partners'
    );
  }

  getCrosspostWhitelistedPages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/crosspost_whitelisted_pages'
    );
  }

  getCustomLabels (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PageUserMessageThreadLabel,
      fields,
      params,
      fetchFirstPage,
      '/custom_labels'
    );
  }

  createCustomLabel (fields: Array<string>, params: Object = {}): Promise<PageUserMessageThreadLabel> {
    return this.createEdge(
      '/custom_labels',
      fields,
      params,
      PageUserMessageThreadLabel
    );
  }

  deleteCustomUserSettings (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/custom_user_settings',
      params
    );
  }

  createCustomUserSetting (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/custom_user_settings',
      fields,
      params,
      Page
    );
  }

  getEvents (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Event,
      fields,
      params,
      fetchFirstPage,
      '/events'
    );
  }

  getFeaturedVideosCollection (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/featured_videos_collection'
    );
  }

  getFeed (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/feed'
    );
  }

  createFeed (fields: Array<string>, params: Object = {}): Promise<PagePost> {
    return this.createEdge(
      '/feed',
      fields,
      params,
      PagePost
    );
  }

  getGlobalBrandChildren (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/global_brand_children'
    );
  }

  getIndexedVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/indexed_videos'
    );
  }

  getInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InsightsResult,
      fields,
      params,
      fetchFirstPage,
      '/insights'
    );
  }

  getInsightsExports (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PageInsightsAsyncExportRun,
      fields,
      params,
      fetchFirstPage,
      '/insights_exports'
    );
  }

  getInstagramAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InstagramUser,
      fields,
      params,
      fetchFirstPage,
      '/instagram_accounts'
    );
  }

  getInstantArticles (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InstantArticle,
      fields,
      params,
      fetchFirstPage,
      '/instant_articles'
    );
  }

  createInstantArticle (fields: Array<string>, params: Object = {}): Promise<InstantArticle> {
    return this.createEdge(
      '/instant_articles',
      fields,
      params,
      InstantArticle
    );
  }

  getInstantArticlesInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InstantArticleInsightsQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/instant_articles_insights'
    );
  }

  createInstantArticlesPublish (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/instant_articles_publish',
      fields,
      params,
      Page
    );
  }

  getLeadGenForms (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      LeadgenForm,
      fields,
      params,
      fetchFirstPage,
      '/leadgen_forms'
    );
  }

  createLeadGenForm (fields: Array<string>, params: Object = {}): Promise<LeadgenForm> {
    return this.createEdge(
      '/leadgen_forms',
      fields,
      params,
      LeadgenForm
    );
  }

  getLikes (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/likes'
    );
  }

  getLiveEncoders (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      LiveEncoder,
      fields,
      params,
      fetchFirstPage,
      '/live_encoders'
    );
  }

  createLiveEncoder (fields: Array<string>, params: Object = {}): Promise<LiveEncoder> {
    return this.createEdge(
      '/live_encoders',
      fields,
      params,
      LiveEncoder
    );
  }

  getLiveVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      LiveVideo,
      fields,
      params,
      fetchFirstPage,
      '/live_videos'
    );
  }

  createLiveVideo (fields: Array<string>, params: Object = {}): Promise<LiveVideo> {
    return this.createEdge(
      '/live_videos',
      fields,
      params,
      LiveVideo
    );
  }

  deleteLocations (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/locations',
      params
    );
  }

  getLocations (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/locations'
    );
  }

  createLocation (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/locations',
      fields,
      params,
      Page
    );
  }

  getMediaFingerprints (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      MediaFingerprint,
      fields,
      params,
      fetchFirstPage,
      '/media_fingerprints'
    );
  }

  createMediaFingerprint (fields: Array<string>, params: Object = {}): Promise<MediaFingerprint> {
    return this.createEdge(
      '/media_fingerprints',
      fields,
      params,
      MediaFingerprint
    );
  }

  createMessageAttachment (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/message_attachments',
      fields,
      params,
      
    );
  }

  createMessage (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/messages',
      fields,
      params,
      Page
    );
  }

  getMessagingFeatureReview (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      MessagingFeatureReview,
      fields,
      params,
      fetchFirstPage,
      '/messaging_feature_review'
    );
  }

  getMessengerAdsPageWelcomeMessages (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      MessengerDestinationPageWelcomeMessage,
      fields,
      params,
      fetchFirstPage,
      '/messenger_ads_page_welcome_messages'
    );
  }

  createMessengerCode (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/messenger_codes',
      fields,
      params,
      Page
    );
  }

  deleteMessengerProfile (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/messenger_profile',
      params
    );
  }

  getMessengerProfile (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      MessengerProfile,
      fields,
      params,
      fetchFirstPage,
      '/messenger_profile'
    );
  }

  createMessengerProfile (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/messenger_profile',
      fields,
      params,
      Page
    );
  }

  getNativeOffers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NativeOffer,
      fields,
      params,
      fetchFirstPage,
      '/nativeoffers'
    );
  }

  createNativeOffer (fields: Array<string>, params: Object = {}): Promise<NativeOffer> {
    return this.createEdge(
      '/nativeoffers',
      fields,
      params,
      NativeOffer
    );
  }

  createNlpConfig (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/nlp_configs',
      fields,
      params,
      Page
    );
  }

  createPageAboutStory (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/page_about_story',
      fields,
      params,
      Page
    );
  }

  getPageBackedInstagramAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      InstagramUser,
      fields,
      params,
      fetchFirstPage,
      '/page_backed_instagram_accounts'
    );
  }

  createPageBackedInstagramAccount (fields: Array<string>, params: Object = {}): Promise<InstagramUser> {
    return this.createEdge(
      '/page_backed_instagram_accounts',
      fields,
      params,
      InstagramUser
    );
  }

  createPageWhatsappNumberVerification (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/page_whatsapp_number_verification',
      fields,
      params,
      Page
    );
  }

  createPassThreadControl (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/pass_thread_control',
      fields,
      params,
      Page
    );
  }

  getPersonas (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Persona,
      fields,
      params,
      fetchFirstPage,
      '/personas'
    );
  }

  createPersona (fields: Array<string>, params: Object = {}): Promise<Persona> {
    return this.createEdge(
      '/personas',
      fields,
      params,
      Persona
    );
  }

  getPhotos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Photo,
      fields,
      params,
      fetchFirstPage,
      '/photos'
    );
  }

  createPhoto (fields: Array<string>, params: Object = {}): Promise<Photo> {
    return this.createEdge(
      '/photos',
      fields,
      params,
      Photo
    );
  }

  getPicture (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProfilePictureSource,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  createPicture (fields: Array<string>, params: Object = {}): Promise<ProfilePictureSource> {
    return this.createEdge(
      '/picture',
      fields,
      params,
      ProfilePictureSource
    );
  }

  getPlaceTopics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PlaceTopic,
      fields,
      params,
      fetchFirstPage,
      '/place_topics'
    );
  }

  getPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/posts'
    );
  }

  getProductCatalogs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      ProductCatalog,
      fields,
      params,
      fetchFirstPage,
      '/product_catalogs'
    );
  }

  createPromotion (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/promotions',
      fields,
      params,
      
    );
  }

  getPublishedPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/published_posts'
    );
  }

  getRatings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Recommendation,
      fields,
      params,
      fetchFirstPage,
      '/ratings'
    );
  }

  createRequestThreadControl (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/request_thread_control',
      fields,
      params,
      Page
    );
  }

  getRoles (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/roles'
    );
  }

  getRtbDynamicPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      RTBDynamicPost,
      fields,
      params,
      fetchFirstPage,
      '/rtb_dynamic_posts'
    );
  }

  getScheduledPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/scheduled_posts'
    );
  }

  getSecondaryReceivers (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/secondary_receivers'
    );
  }

  getSettings (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PageSettings,
      fields,
      params,
      fetchFirstPage,
      '/settings'
    );
  }

  createSetting (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/settings',
      fields,
      params,
      Page
    );
  }

  getShowPlaylists (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      VideoList,
      fields,
      params,
      fetchFirstPage,
      '/show_playlists'
    );
  }

  deleteSubscribedApps (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/subscribed_apps',
      params
    );
  }

  getSubscribedApps (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Application,
      fields,
      params,
      fetchFirstPage,
      '/subscribed_apps'
    );
  }

  createSubscribedApp (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/subscribed_apps',
      fields,
      params,
      Page
    );
  }

  deleteTabs (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/tabs',
      params
    );
  }

  getTabs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Tab,
      fields,
      params,
      fetchFirstPage,
      '/tabs'
    );
  }

  createTab (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/tabs',
      fields,
      params,
      Page
    );
  }

  getTagged (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/tagged'
    );
  }

  createTakeThreadControl (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/take_thread_control',
      fields,
      params,
      Page
    );
  }

  getThreadOwner (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PageThreadOwner,
      fields,
      params,
      fetchFirstPage,
      '/thread_owner'
    );
  }

  deleteThreadSettings (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/thread_settings',
      params
    );
  }

  createThreadSetting (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/thread_settings',
      fields,
      params,
      Page
    );
  }

  getThreads (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      UnifiedThread,
      fields,
      params,
      fetchFirstPage,
      '/threads'
    );
  }

  getTours (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      EventTour,
      fields,
      params,
      fetchFirstPage,
      '/tours'
    );
  }

  createUnlinkAccount (fields: Array<string>, params: Object = {}): Promise<Page> {
    return this.createEdge(
      '/unlink_accounts',
      fields,
      params,
      Page
    );
  }

  getUpcomingChanges (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PageUpcomingChange,
      fields,
      params,
      fetchFirstPage,
      '/upcoming_changes'
    );
  }

  getVideoCopyrightRules (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      VideoCopyrightRule,
      fields,
      params,
      fetchFirstPage,
      '/video_copyright_rules'
    );
  }

  createVideoCopyright (fields: Array<string>, params: Object = {}): Promise<VideoCopyright> {
    return this.createEdge(
      '/video_copyrights',
      fields,
      params,
      VideoCopyright
    );
  }

  getVideoLists (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      VideoList,
      fields,
      params,
      fetchFirstPage,
      '/video_lists'
    );
  }

  getVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdVideo,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
  }

  createVideo (fields: Array<string>, params: Object = {}): Promise<AdVideo> {
    return this.createEdge(
      '/videos',
      fields,
      params,
      AdVideo
    );
  }

  getVisitorPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      PagePost,
      fields,
      params,
      fetchFirstPage,
      '/visitor_posts'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Page {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Page {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
