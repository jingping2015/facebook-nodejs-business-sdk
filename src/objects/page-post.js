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
import Comment from './comment';
import RTBDynamicPost from './rtb-dynamic-post';
import InsightsResult from './insights-result';
import Profile from './profile';
import Post from './post';
import Page from './page';

/**
 * PagePost
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class PagePost extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      actions: 'actions',
      admin_creator: 'admin_creator',
      allowed_advertising_objectives: 'allowed_advertising_objectives',
      application: 'application',
      backdated_time: 'backdated_time',
      call_to_action: 'call_to_action',
      can_reply_privately: 'can_reply_privately',
      child_attachments: 'child_attachments',
      comments_mirroring_domain: 'comments_mirroring_domain',
      coordinates: 'coordinates',
      created_time: 'created_time',
      event: 'event',
      expanded_height: 'expanded_height',
      expanded_width: 'expanded_width',
      feed_targeting: 'feed_targeting',
      from: 'from',
      full_picture: 'full_picture',
      height: 'height',
      icon: 'icon',
      id: 'id',
      instagram_eligibility: 'instagram_eligibility',
      is_app_share: 'is_app_share',
      is_eligible_for_promotion: 'is_eligible_for_promotion',
      is_expired: 'is_expired',
      is_hidden: 'is_hidden',
      is_instagram_eligible: 'is_instagram_eligible',
      is_popular: 'is_popular',
      is_published: 'is_published',
      is_spherical: 'is_spherical',
      message: 'message',
      message_tags: 'message_tags',
      multi_share_end_card: 'multi_share_end_card',
      multi_share_optimized: 'multi_share_optimized',
      parent_id: 'parent_id',
      permalink_url: 'permalink_url',
      picture: 'picture',
      place: 'place',
      privacy: 'privacy',
      promotable_id: 'promotable_id',
      promotion_status: 'promotion_status',
      properties: 'properties',
      scheduled_publish_time: 'scheduled_publish_time',
      shares: 'shares',
      status_type: 'status_type',
      story: 'story',
      story_tags: 'story_tags',
      subscribed: 'subscribed',
      target: 'target',
      targeting: 'targeting',
      timeline_visibility: 'timeline_visibility',
      updated_time: 'updated_time',
      via: 'via',
      video_buying_eligibility: 'video_buying_eligibility',
      width: 'width',
    });
  }

  static get BackdatedTimeGranularity (): Object {
    return Object.freeze({
      day: 'day',
      hour: 'hour',
      min: 'min',
      month: 'month',
      none: 'none',
      year: 'year',
    });
  }
  static get CheckinEntryPoint (): Object {
    return Object.freeze({
      branding_checkin: 'BRANDING_CHECKIN',
      branding_other: 'BRANDING_OTHER',
      branding_photo: 'BRANDING_PHOTO',
      branding_status: 'BRANDING_STATUS',
    });
  }
  static get Formatting (): Object {
    return Object.freeze({
      markdown: 'MARKDOWN',
      plaintext: 'PLAINTEXT',
    });
  }
  static get PlaceAttachmentSetting (): Object {
    return Object.freeze({
      value_1: '1',
      value_2: '2',
    });
  }
  static get PostSurfacesBlacklist (): Object {
    return Object.freeze({
      value_1: '1',
      value_2: '2',
      value_3: '3',
      value_4: '4',
      value_5: '5',
    });
  }
  static get PostingToRedspace (): Object {
    return Object.freeze({
      disabled: 'disabled',
      enabled: 'enabled',
    });
  }
  static get TargetSurface (): Object {
    return Object.freeze({
      story: 'STORY',
      timeline: 'TIMELINE',
    });
  }
  static get UnpublishedContentType (): Object {
    return Object.freeze({
      ads_post: 'ADS_POST',
      draft: 'DRAFT',
      inline_created: 'INLINE_CREATED',
      published: 'PUBLISHED',
      reviewable_branded_content: 'REVIEWABLE_BRANDED_CONTENT',
      scheduled: 'SCHEDULED',
      scheduled_recurring: 'SCHEDULED_RECURRING',
    });
  }
  static get With (): Object {
    return Object.freeze({
      location: 'LOCATION',
    });
  }
  static get FeedStoryVisibility (): Object {
    return Object.freeze({
      hidden: 'hidden',
      visible: 'visible',
    });
  }
  static get TimelineVisibility (): Object {
    return Object.freeze({
      forced_allow: 'forced_allow',
      hidden: 'hidden',
      normal: 'normal',
    });
  }

  getAttachments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/attachments'
    );
  }

  getComments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Comment,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  createComment (fields: Array<string>, params: Object = {}): Promise<Comment> {
    return this.createEdge(
      '/comments',
      fields,
      params,
      Comment
    );
  }

  getDynamicPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      RTBDynamicPost,
      fields,
      params,
      fetchFirstPage,
      '/dynamic_posts'
    );
  }

  getEditActions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      AbstractObject,
      fields,
      params,
      fetchFirstPage,
      '/edit_actions'
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

  deleteLikes (params: Object = {}): Promise<*> {
    return super.deleteEdge(
      '/likes',
      params
    );
  }

  getLikes (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/likes'
    );
  }

  createLike (fields: Array<string>, params: Object = {}): Promise<PagePost> {
    return this.createEdge(
      '/likes',
      fields,
      params,
      PagePost
    );
  }

  getReactions (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/reactions'
    );
  }

  getSharedPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Post,
      fields,
      params,
      fetchFirstPage,
      '/sharedposts'
    );
  }

  getSponsorTags (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Page,
      fields,
      params,
      fetchFirstPage,
      '/sponsor_tags'
    );
  }

  getTo (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/to'
    );
  }

  getWithTags (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/with_tags'
    );
  }

  // $FlowFixMe : Support Generic Types
  delete (fields: Array<string>, params: Object = {}): AbstractObject {
    // $FlowFixMe : Support Generic Types
    return super.delete(
      params
    );
  }

  
  get (fields: Array<string>, params: Object = {}): PagePost {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }

  // $FlowFixMe : Support Generic Types
  update (fields: Array<string>, params: Object = {}): PagePost {
    // $FlowFixMe : Support Generic Types
    return super.update(
      params
    );
  }
}
