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
import Profile from './profile';
import NullNode from './null-node';
import LiveVideo from './live-video';
import Photo from './photo';

/**
 * Event
 * @extends AbstractCrudObject
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class Event extends AbstractCrudObject {
  static get Fields () {
    return Object.freeze({
      attending_count: 'attending_count',
      can_guests_invite: 'can_guests_invite',
      category: 'category',
      cover: 'cover',
      declined_count: 'declined_count',
      description: 'description',
      discount_code_enabled: 'discount_code_enabled',
      end_time: 'end_time',
      event_times: 'event_times',
      guest_list_enabled: 'guest_list_enabled',
      id: 'id',
      interested_count: 'interested_count',
      is_canceled: 'is_canceled',
      is_draft: 'is_draft',
      is_page_owned: 'is_page_owned',
      maybe_count: 'maybe_count',
      name: 'name',
      noreply_count: 'noreply_count',
      owner: 'owner',
      parent_group: 'parent_group',
      place: 'place',
      scheduled_publish_time: 'scheduled_publish_time',
      start_time: 'start_time',
      ticket_uri: 'ticket_uri',
      ticket_uri_start_sales_time: 'ticket_uri_start_sales_time',
      ticketing_privacy_uri: 'ticketing_privacy_uri',
      ticketing_terms_uri: 'ticketing_terms_uri',
      timezone: 'timezone',
      type: 'type',
      updated_time: 'updated_time',
    });
  }

  static get Category (): Object {
    return Object.freeze({
      art_event: 'ART_EVENT',
      book_event: 'BOOK_EVENT',
      class_event: 'CLASS_EVENT',
      comedy_event: 'COMEDY_EVENT',
      conference_event: 'CONFERENCE_EVENT',
      dance_event: 'DANCE_EVENT',
      dining_event: 'DINING_EVENT',
      family_event: 'FAMILY_EVENT',
      festival_event: 'FESTIVAL_EVENT',
      fitness: 'FITNESS',
      food_tasting: 'FOOD_TASTING',
      fundraiser: 'FUNDRAISER',
      lecture: 'LECTURE',
      meetup: 'MEETUP',
      movie_event: 'MOVIE_EVENT',
      music_event: 'MUSIC_EVENT',
      neighborhood: 'NEIGHBORHOOD',
      nightlife: 'NIGHTLIFE',
      other: 'OTHER',
      religious_event: 'RELIGIOUS_EVENT',
      shopping: 'SHOPPING',
      sports_event: 'SPORTS_EVENT',
      theater_event: 'THEATER_EVENT',
      volunteering: 'VOLUNTEERING',
      workshop: 'WORKSHOP',
    });
  }
  static get Type (): Object {
    return Object.freeze({
      community: 'community',
      group: 'group',
      private: 'private',
      public: 'public',
    });
  }
  static get EventStateFilter (): Object {
    return Object.freeze({
      canceled: 'canceled',
      draft: 'draft',
      published: 'published',
      scheduled_draft_for_publication: 'scheduled_draft_for_publication',
    });
  }
  static get TimeFilter (): Object {
    return Object.freeze({
      past: 'past',
      upcoming: 'upcoming',
    });
  }
  static get PromotableEventTypes (): Object {
    return Object.freeze({
      offsite_ticket: 'OFFSITE_TICKET',
      onsite_ticket: 'ONSITE_TICKET',
      rsvp: 'RSVP',
    });
  }

  getAdmins (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/admins'
    );
  }

  getComments (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/comments'
    );
  }

  getFeed (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/feed'
    );
  }

  createFeed (fields: Array<string>, params: Object = {}): Promise<AbstractObject> {
    return this.createEdge(
      '/feed',
      fields,
      params,
      
    );
  }

  getLiveVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NullNode,
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

  getPhotos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NullNode,
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
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/picture'
    );
  }

  getPosts (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/posts'
    );
  }

  getRoles (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      Profile,
      fields,
      params,
      fetchFirstPage,
      '/roles'
    );
  }

  getVideos (fields: Array<string>, params: Object = {}, fetchFirstPage: boolean = true): Cursor | Promise<*> {
    return this.getEdge(
      NullNode,
      fields,
      params,
      fetchFirstPage,
      '/videos'
    );
  }

  
  get (fields: Array<string>, params: Object = {}): Event {
    // $FlowFixMe : Support Generic Types
    return this.read(
      fields,
      params
    );
  }
}
