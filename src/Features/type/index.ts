interface rocketFirstStageCores {
    'block': number,
    'core_serial': string,
    'flight': number,
    'gridfins': boolean,
    'land_success': boolean,
    'landing_intent': boolean,
    'landing_type': string,
    'landing_vehicle': string,
    'legs': boolean,
    'reused': boolean
}
interface rocketSecondStagePayloads {
    'customers': Array<string>,
    'manufacturer': string,
    'nationality': string,
    'norad_id': Array<number>,
    'orbit': string,
    'orbit_params': {
        'apoapsis_km': number, 'arg_of_pericenter': number, 'eccentricity': number, 'epoch': string, 'inclination_deg': number, 'lifespan_years': number, 'longitude': number, 'mean_anomaly': number, 'mean_motion': number, 'periapsis_km': number, 'period_min': number, 'raan': number, 'reference_system': string, 'regime': string, 'semi_major_axis_km': number
    }
    'payload_id': number,
    'payload_mass_kg': number,
    'payload_mass_lbs': number,
    'payload_type': string,
    'reused': boolean,
}

export interface AllLauchesType {
    'crew': Array<string>,
    'details': string
    'flight_number': number,
    'is_tentative': boolean,
    'launch_date_local': string,
    'launch_date_unix': number,
    'launch_date_utc': string,
    'launch_failure_details'?: { 'time': number, 'altitude': number, 'reason': string }

    'launch_site': { 'site_id': string, 'site_name': string, 'site_name_long': string }
    'launch_success': boolean,
    'launch_window': number,
    'launch_year': string,
    'links': {
        'article_link': string, 'flickr_images': Array<string>, 'mission_patch': string, 'mission_patch_small': string, 'presskit': string,
        'reddit_campaign': string, 'reddit_launch': string, 'reddit_media': string, 'reddit_recovery': string, 'video_link': string, 'wikipedia': string, 'youtube_id': string
    }
    'mission_id': Array<string>
    'mission_name': string,
    'rocket': {
        'fairings': { 'reused': boolean, 'recovery_attempt': boolean, 'recovered': boolean, 'ship': string }
        'first_stage': { 'cores': Array<rocketFirstStageCores> }
        'rocket_id': string,
        'rocket_name': string,
        'rocket_type': string,
        'second_stage': { 'block': number, 'payloads': Array<rocketSecondStagePayloads> }
    }
    'ships': Array<string>
    'static_fire_date_unix': number,
    'static_fire_date_utc': string,
    'tbd': boolean,
    'telemetry': { 'flight_club': string }
    'tentative_max_precision': string,
    'timeline': { 'webcast_liftoff': number }
    'upcoming': boolean
}