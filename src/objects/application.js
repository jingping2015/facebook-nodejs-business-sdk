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
import AdNetworkAnalyticsSyncQueryResult from './ad-network-analytics-sync-query-result';
import AdNetworkAnalyticsAsyncQueryResult from './ad-network-analytics-async-query-result';
import Business from './business';
import Group from './group';
import AdAccount from './ad-account';
import User from './user';
import DACheck from './da-check';
import Event from './event';

/**
 * Application
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Application extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      aam_rules: 'aam_rules',
      an_ad_space_limit: 'an_ad_space_limit',
      an_platforms: 'an_platforms',
      android_key_hash: 'android_key_hash',
      android_sdk_error_categories: 'android_sdk_error_categories',
      app_domains: 'app_domains',
      app_events_feature_bitmask: 'app_events_feature_bitmask',
      app_events_session_timeout: 'app_events_session_timeout',
      app_install_tracked: 'app_install_tracked',
      app_name: 'app_name',
      app_signals_binding_ios: 'app_signals_binding_ios',
      app_type: 'app_type',
      auth_dialog_data_help_url: 'auth_dialog_data_help_url',
      auth_dialog_headline: 'auth_dialog_headline',
      auth_dialog_perms_explanation: 'auth_dialog_perms_explanation',
      auth_referral_default_activity_privacy: 'auth_referral_default_activity_privacy',
      auth_referral_enabled: 'auth_referral_enabled',
      auth_referral_extended_perms: 'auth_referral_extended_perms',
      auth_referral_friend_perms: 'auth_referral_friend_perms',
      auth_referral_response_type: 'auth_referral_response_type',
      auth_referral_user_perms: 'auth_referral_user_perms',
      auto_event_mapping_android: 'auto_event_mapping_android',
      auto_event_mapping_ios: 'auto_event_mapping_ios',
      auto_event_setup_enabled: 'auto_event_setup_enabled',
      canvas_fluid_height: 'canvas_fluid_height',
      canvas_fluid_width: 'canvas_fluid_width',
      canvas_url: 'canvas_url',
      category: 'category',
      client_config: 'client_config',
      company: 'company',
      configured_ios_sso: 'configured_ios_sso',
      contact_email: 'contact_email',
      created_time: 'created_time',
      creator_uid: 'creator_uid',
      daily_active_users: 'daily_active_users',
      daily_active_users_rank: 'daily_active_users_rank',
      deauth_callback_url: 'deauth_callback_url',
      default_share_mode: 'default_share_mode',
      description: 'description',
      financial_id: 'financial_id',
      gdpv4_chrome_custom_tabs_enabled: 'gdpv4_chrome_custom_tabs_enabled',
      gdpv4_enabled: 'gdpv4_enabled',
      gdpv4_nux_content: 'gdpv4_nux_content',
      gdpv4_nux_enabled: 'gdpv4_nux_enabled',
      has_messenger_product: 'has_messenger_product',
      hosting_url: 'hosting_url',
      icon_url: 'icon_url',
      id: 'id',
      ios_bundle_id: 'ios_bundle_id',
      ios_sdk_dialog_flows: 'ios_sdk_dialog_flows',
      ios_sdk_error_categories: 'ios_sdk_error_categories',
      ios_sfvc_attr: 'ios_sfvc_attr',
      ios_supports_native_proxy_auth_flow: 'ios_supports_native_proxy_auth_flow',
      ios_supports_system_auth: 'ios_supports_system_auth',
      ipad_app_store_id: 'ipad_app_store_id',
      iphone_app_store_id: 'iphone_app_store_id',
      latest_sdk_version: 'latest_sdk_version',
      link: 'link',
      logging_token: 'logging_token',
      login_secret: 'login_secret',
      logo_url: 'logo_url',
      migrations: 'migrations',
      mobile_profile_section_url: 'mobile_profile_section_url',
      mobile_web_url: 'mobile_web_url',
      monthly_active_users: 'monthly_active_users',
      monthly_active_users_rank: 'monthly_active_users_rank',
      name: 'name',
      namespace: 'namespace',
      object_store_urls: 'object_store_urls',
      page_tab_default_name: 'page_tab_default_name',
      page_tab_url: 'page_tab_url',
      photo_url: 'photo_url',
      privacy_policy_url: 'privacy_policy_url',
      profile_section_url: 'profile_section_url',
      property_id: 'property_id',
      real_time_mode_devices: 'real_time_mode_devices',
      restrictions: 'restrictions',
      restrictive_data_filter_params: 'restrictive_data_filter_params',
      restrictive_data_filter_rules: 'restrictive_data_filter_rules',
      sdk_update_message: 'sdk_update_message',
      seamless_login: 'seamless_login',
      secure_canvas_url: 'secure_canvas_url',
      secure_page_tab_url: 'secure_page_tab_url',
      server_ip_whitelist: 'server_ip_whitelist',
      smart_login_bookmark_icon_url: 'smart_login_bookmark_icon_url',
      smart_login_menu_icon_url: 'smart_login_menu_icon_url',
      social_discovery: 'social_discovery',
      subcategory: 'subcategory',
      suggested_events_setting: 'suggested_events_setting',
      supported_platforms: 'supported_platforms',
      supports_apprequests_fast_app_switch: 'supports_apprequests_fast_app_switch',
      supports_attribution: 'supports_attribution',
      supports_implicit_sdk_logging: 'supports_implicit_sdk_logging',
      suppress_native_ios_gdp: 'suppress_native_ios_gdp',
      terms_of_service_url: 'terms_of_service_url',
      url_scheme_suffix: 'url_scheme_suffix',
      user_support_email: 'user_support_email',
      user_support_url: 'user_support_url',
      website_url: 'website_url',
      weekly_active_users: 'weekly_active_users',
    });
  }

  static get SupportedPlatforms (): Object {
    return Object.freeze({
      amazon: 'AMAZON',
      android: 'ANDROID',
      canvas: 'CANVAS',
      gameroom: 'GAMEROOM',
      instant_game: 'INSTANT_GAME',
      ipad: 'IPAD',
      iphone: 'IPHONE',
      mobile_web: 'MOBILE_WEB',
      supplementary_images: 'SUPPLEMENTARY_IMAGES',
      web: 'WEB',
      windows: 'WINDOWS',
    });
  }
  static get AnPlatforms (): Object {
    return Object.freeze({
      android: 'ANDROID',
      desktop: 'DESKTOP',
      instant_articles: 'INSTANT_ARTICLES',
      ios: 'IOS',
      mobile_web: 'MOBILE_WEB',
      unknown: 'UNKNOWN',
    });
  }
  static get Platform (): Object {
    return Object.freeze({
      android: 'ANDROID',
      ios: 'IOS',
    });
  }
  static get RequestType (): Object {
    return Object.freeze({
      app_indexing: 'APP_INDEXING',
      button_sampling: 'BUTTON_SAMPLING',
      plugin: 'PLUGIN',
    });
  }
  static get MutationMethod (): Object {
    return Object.freeze({
      add: 'ADD',
      delete: 'DELETE',
      replace: 'REPLACE',
    });
  }
  static get PostMethod (): Object {
    return Object.freeze({
      codeless: 'CODELESS',
      eymt: 'EYMT',
    });
  }
  static get ScoreType (): Object {
    return Object.freeze({
      custom: 'CUSTOM',
      numeric: 'NUMERIC',
      time: 'TIME',
    });
  }
  static get SortOrder (): Object {
    return Object.freeze({
      higher_is_better: 'HIGHER_IS_BETTER',
      lower_is_better: 'LOWER_IS_BETTER',
    });
  }
  static get LoggingSource (): Object {
    return Object.freeze({
      messenger_bot: 'MESSENGER_BOT',
    });
  }
  static get LoggingTarget (): Object {
    return Object.freeze({
      app: 'APP',
      app_and_page: 'APP_AND_PAGE',
      page: 'PAGE',
    });
  }

  deleteAccounts (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/accounts',
      params
    );
  }

  getAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/accounts'
    );
  }

  createAccount (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/accounts',
      fields,
      params,
      
    );
  }

  createActivity (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/activities',
      fields,
      params,
      
    );
  }

  getAdNetworkAnalytics (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdNetworkAnalyticsSyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics'
    );
  }

  createAdNetworkAnalytic (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/adnetworkanalytics',
      fields,
      params,
      Application
    );
  }

  getAdNetworkAnalyticsResults (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdNetworkAnalyticsAsyncQueryResult,
      fields,
      params,
      fetchFirstPage,
      '/adnetworkanalytics_results'
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

  getAppEventTypes (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/app_event_types'
    );
  }

  createAppIndexing (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/app_indexing',
      fields,
      params,
      Application
    );
  }

  createAppIndexingSession (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/app_indexing_session',
      fields,
      params,
      Application
    );
  }

  getAppInsights (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/app_insights'
    );
  }

  getAppInstalledGroups (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Group,
      fields,
      params,
      fetchFirstPage,
      '/app_installed_groups'
    );
  }

  createAppPushDeviceToken (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/app_push_device_token',
      fields,
      params,
      Application
    );
  }

  getAppAssets (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/appassets'
    );
  }

  createAsset (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/assets',
      fields,
      params,
      Application
    );
  }

  getAuthorizedAdAccounts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AdAccount,
      fields,
      params,
      fetchFirstPage,
      '/authorized_adaccounts'
    );
  }

  deleteBanned (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/banned',
      params
    );
  }

  getBanned (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      User,
      fields,
      params,
      fetchFirstPage,
      '/banned'
    );
  }

  getButtonAutoDetectionDeviceSelection (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/button_auto_detection_device_selection'
    );
  }

  createButtonIndexing (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/button_indexing',
      fields,
      params,
      Application
    );
  }

  createCodelessEventBinding (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/codeless_event_bindings',
      fields,
      params,
      Application
    );
  }

  createCodelessEventMapping (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/codeless_event_mappings',
      fields,
      params,
      Application
    );
  }

  getCustomAudienceThirdPartyId (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/custom_audience_third_party_id'
    );
  }

  getDaChecks (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      DACheck,
      fields,
      params,
      fetchFirstPage,
      '/da_checks'
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

  getFullAppIndexingInfos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/full_app_indexing_infos'
    );
  }

  createFullAppIndexingInfo (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/full_app_indexing_infos',
      fields,
      params,
      
    );
  }

  getInsightsPushSchedule (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/insights_push_schedule'
    );
  }

  createInsightsPushSchedule (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/insights_push_schedule',
      fields,
      params,
      
    );
  }

  getIosDialogConfigs (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/ios_dialog_configs'
    );
  }

  createLeaderboardsCreate (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/leaderboards_create',
      fields,
      params,
      Application
    );
  }

  createLeaderboardsDeleteEntry (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/leaderboards_delete_entry',
      fields,
      params,
      Application
    );
  }

  createLeaderboardsReset (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/leaderboards_reset',
      fields,
      params,
      Application
    );
  }

  createLeaderboardsSetScore (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/leaderboards_set_score',
      fields,
      params,
      Application
    );
  }

  createMmpAuditing (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/mmp_auditing',
      fields,
      params,
      
    );
  }

  getMobileSdkGk (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/mobile_sdk_gk'
    );
  }

  createOccludesPopup (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/occludespopups',
      fields,
      params,
      
    );
  }

  createPageActivity (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/page_activities',
      fields,
      params,
      Application
    );
  }

  deletePaymentCurrencies (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/payment_currencies',
      params
    );
  }

  createPaymentCurrency (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/payment_currencies',
      fields,
      params,
      Application
    );
  }

  getPermissions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/permissions'
    );
  }

  getProducts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/products'
    );
  }

  getPurchases (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/purchases'
    );
  }

  getRoles (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/roles'
    );
  }

  getSubscribedDomains (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/subscribed_domains'
    );
  }

  createSubscribedDomain (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/subscribed_domains',
      fields,
      params,
      Application
    );
  }

  getSubscribedDomainsPhishing (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/subscribed_domains_phishing'
    );
  }

  createSubscribedDomainsPhishing (fields: Array<string>, params: Object = {}): Promise<Application> {
    return this.createEdge(
      '/subscribed_domains_phishing',
      fields,
      params,
      Application
    );
  }

  deleteSubscriptions (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/subscriptions',
      params
    );
  }

  createSubscription (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/subscriptions',
      fields,
      params,
      
    );
  }

  createUpload (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/uploads',
      fields,
      params,
      
    );
  }

  createUserProperty (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/user_properties',
      fields,
      params,
      
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Application {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): Application {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
