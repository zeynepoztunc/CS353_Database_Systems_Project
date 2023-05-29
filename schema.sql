create type dblink_pkey_results as
(
    position integer,
    colname  text
);

alter type dblink_pkey_results owner to postgres;

-- Unknown how to generate base type type

alter type ltree owner to postgres;

-- Unknown how to generate base type type

alter type lquery owner to postgres;

-- Unknown how to generate base type type

alter type ltxtquery owner to postgres;

-- Unknown how to generate base type type

alter type ltree_gist owner to postgres;

create type tablefunc_crosstab_2 as
(
    row_name   text,
    category_1 text,
    category_2 text
);

alter type tablefunc_crosstab_2 owner to postgres;

create type tablefunc_crosstab_3 as
(
    row_name   text,
    category_1 text,
    category_2 text,
    category_3 text
);

alter type tablefunc_crosstab_3 owner to postgres;

create type tablefunc_crosstab_4 as
(
    row_name   text,
    category_1 text,
    category_2 text,
    category_3 text,
    category_4 text
);

alter type tablefunc_crosstab_4 owner to postgres;

-- Unknown how to generate base type type

alter type citext owner to postgres;

-- Unknown how to generate base type type

alter type gtrgm owner to postgres;

-- Unknown how to generate base type type

alter type query_int owner to postgres;

-- Unknown how to generate base type type

alter type intbig_gkey owner to postgres;

-- Unknown how to generate base type type

alter type hstore owner to postgres;

-- Unknown how to generate base type type

alter type ghstore owner to postgres;

-- Unknown how to generate base type type

comment on type cube is 'multi-dimensional cube ''(FLOAT-1, FLOAT-2, ..., FLOAT-N), (FLOAT-1, FLOAT-2, ..., FLOAT-N)''';

alter type cube owner to postgres;

create domain earth as cube
    constraint not_point check (cube_is_point(VALUE)) constraint not_3d check (cube_dim(VALUE) <= 3) constraint on_surface check (abs((
        (cube_distance(VALUE, '(0)'::cube) / earth()) - (1)::double precision)) < '1e-06'::double precision);

alter domain earth owner to postgres;

-- Unknown how to generate base type type

alter type gbtreekey4 owner to postgres;

-- Unknown how to generate base type type

alter type gbtreekey8 owner to postgres;

-- Unknown how to generate base type type

alter type gbtreekey16 owner to postgres;

-- Unknown how to generate base type type

alter type gbtreekey32 owner to postgres;

-- Unknown how to generate base type type

alter type gbtreekey_var owner to postgres;

create table "Admin"
(
    "user-id"  integer not null
        primary key,
    "admin-id" integer not null
);

alter table "Admin"
    owner to oyfcmypj;

create table "RegisteredUser"
(
    "user-id"              integer     not null
        primary key,
    "e-mail"               varchar(60) not null,
    "date-of-birth"        date        not null,
    "telephone-no"         varchar(15) not null,
    gender                 varchar(20) not null,
    "is-earthquake-victim" boolean,
    balance                real,
    "user-rating"          real,
    "usage-mode"           varchar(20) not null,
    description            text,
    "user-type"            varchar(20) not null,
    "join-date"            date        not null
);

alter table "RegisteredUser"
    owner to oyfcmypj;

create table "Host"
(
    "user-id"      integer     not null
        primary key
        references "RegisteredUser"
            on delete cascade,
    iban           varchar(40) not null,
    region         varchar(30),
    language       varchar(30) not null,
    job            varchar(30) not null,
    "is-superhost" boolean
);

alter table "Host"
    owner to oyfcmypj;

create table "Customer"
(
    "user-id"            integer not null
        primary key
        references "RegisteredUser"
            on delete cascade,
    "credit-card-number" varchar(20)
);

alter table "Customer"
    owner to oyfcmypj;

create table "Rental"
(
    "rental-id"                       serial
        primary key,
    "rental-name"                     varchar(100) not null,
    "host-id"                         integer      not null,
    "guest-no"                        integer      not null,
    "daily-price"                     real         not null,
    rating                            real,
    city                              varchar(20)  not null,
    province                          varchar(20)  not null,
    address                           varchar(120) not null,
    latitude                          real         not null,
    longitude                         real         not null,
    "renting-available-start-date"    date         not null,
    "renting-available-end-date"      date         not null,
    "host-selected-rental-start-date" date         not null,
    "host-selected-rental-end-date"   date         not null,
    "guest-policy"                    varchar(100),
    "rental-type"                     varchar(20)  not null,
    "area-in-m2"                      real         not null,
    "num-of-beds"                     integer      not null,
    description                       text         not null,
    "earthquake-support"              boolean      not null,
    "max-stay-duration"               integer      not null,
    "cancellation-refund"             integer      not null,
    "cancellation-day-limit"          integer      not null,
    "earliest-check-in-hour"          time         not null,
    "latest-check-in-hour"            time         not null,
    "cancellation-hour-limit"         integer      not null,
    "auto-approve-requests"           boolean      not null,
    "is-admin-approved"               boolean,
    couchsurfing                      boolean      not null
);

alter table "Rental"
    owner to oyfcmypj;

create table "Posts"
(
    "rental-id"  integer not null
        primary key
        references "Rental"
            on delete cascade,
    "user-id"    integer not null
        references "Host"
            on delete cascade,
    "added-date" date    not null
);

alter table "Posts"
    owner to oyfcmypj;

create table "Flat"
(
    "rental-id"       integer not null
        primary key
        references "Rental"
            on delete cascade,
    "flat-type"       varchar(20),
    "num-of-rooms"    integer not null,
    "no-of-bathrooms" integer not null
);

alter table "Flat"
    owner to oyfcmypj;

create table "Room"
(
    "rental-id"              integer not null
        primary key
        references "Rental"
            on delete cascade,
    "common-kitchen-num"     integer not null,
    "common-bathroom-num"    integer not null,
    "common-living-room-num" integer not null
);

alter table "Room"
    owner to oyfcmypj;

create table "E-GovernmentFile"
(
    "file-id"          serial
        primary key,
    "file-name"        varchar(30) not null,
    "file-size"        real        not null,
    "file-extension"   varchar(5)  not null,
    "file-binary-path" text        not null
);

alter table "E-GovernmentFile"
    owner to oyfcmypj;

create table "Owns"
(
    "user-id" integer not null
        references "RegisteredUser"
            on delete cascade,
    "file-id" integer not null
        references "E-GovernmentFile"
            on delete cascade,
    primary key ("user-id", "file-id")
);

alter table "Owns"
    owner to oyfcmypj;

create table "Images"
(
    "image-id"        serial,
    "image-type"      varchar(15) not null,
    "image-name"      varchar(30) not null,
    "user-id"         integer     not null
        references "RegisteredUser"
            on delete cascade,
    "image-size"      real        not null,
    "img-binary-path" text        not null,
    primary key ("image-id", "image-type", "image-name")
);

alter table "Images"
    owner to oyfcmypj;

create table "Landmarks"
(
    "landmark-id"   serial
        primary key,
    "user-id"       integer     not null,
    "landmark-name" varchar(40) not null,
    description     text,
    city            varchar(20) not null,
    province        varchar(20) not null,
    latitude        real        not null,
    longitude       real        not null,
    accepted        boolean
);

alter table "Landmarks"
    owner to oyfcmypj;

create table "Complaints"
(
    "user-id1"       integer   not null
        references "RegisteredUser"
            on delete cascade,
    "user-id2"       integer   not null
        references "RegisteredUser"
            on delete cascade,
    "complaint-date" timestamp not null,
    description      text      not null,
    "is-confirmed"   boolean,
    evaluated        boolean,
    primary key ("user-id1", "user-id2", "complaint-date")
);

alter table "Complaints"
    owner to oyfcmypj;

create table "Wishlists"
(
    "user-id"   integer not null
        references "Customer"
            on delete cascade,
    "rental-id" integer not null
        references "Rental"
            on delete cascade,
    date        date    not null,
    primary key ("user-id", "rental-id")
);

alter table "Wishlists"
    owner to oyfcmypj;

create table "Reports"
(
    "user-id"      integer not null
        references "RegisteredUser"
            on delete cascade,
    "rental-id"    integer not null
        references "Rental"
            on delete cascade,
    "report-date"  date    not null,
    description    text    not null,
    "is-confirmed" boolean,
    evaluated      boolean,
    primary key ("user-id", "rental-id")
);

alter table "Reports"
    owner to oyfcmypj;

create table "MapLocation"
(
    "location-id" serial
        primary key,
    name          varchar(40) not null,
    type          varchar(20) not null,
    latitude      real        not null,
    longitude     real        not null
);

alter table "MapLocation"
    owner to oyfcmypj;

create table "RentalLocations"
(
    "rental-id"   integer not null
        references "Rental"
            on delete cascade,
    "location-id" integer not null
        references "MapLocation"
            on delete cascade,
    primary key ("rental-id", "location-id")
);

alter table "RentalLocations"
    owner to oyfcmypj;

create table "FavoritedLocations"
(
    "location-id" integer not null
        references "MapLocation"
            on delete cascade,
    "user-id"     integer not null
        references "RegisteredUser"
            on delete cascade,
    "rental-id"   integer not null
        references "Rental"
            on delete cascade,
    primary key ("location-id", "user-id")
);

alter table "FavoritedLocations"
    owner to oyfcmypj;

create table "GeneratedReports"
(
    "report-id"                  serial,
    date                         timestamp not null,
    "user-cnt"                   integer   not null,
    "host-cnt"                   integer   not null,
    "postings-cnt"               integer   not null,
    "booking-cnt"                integer   not null,
    "user-earthquake-victim-cnt" integer   not null,
    "host-earthquake-victim-cnt" integer   not null,
    "superhost-cnt"              integer   not null,
    "user-reporting-cnt"         integer   not null,
    "post-reporting-cnt"         integer   not null,
    primary key ("report-id", date)
);

alter table "GeneratedReports"
    owner to oyfcmypj;

create table "Review"
(
    "review-id"            serial
        primary key,
    review                 text,
    date                   date    not null,
    "cleanliness-rating"   integer not null,
    "check-in-rating"      integer not null,
    "communication-rating" integer not null,
    "accuracy-rating"      integer not null,
    "safety-rating"        integer not null,
    "location-rating"      integer not null,
    "value-rating"         integer not null,
    "general-rating"       integer not null,
    "is-anonymous"         boolean not null
);

alter table "Review"
    owner to oyfcmypj;

create table "Comments"
(
    "review-id"                integer not null
        primary key
        references "Review"
            on delete cascade,
    "user-id"                  integer not null
        references "Host"
            on delete cascade,
    "comment-description-text" text    not null,
    date                       date    not null
);

alter table "Comments"
    owner to oyfcmypj;

create table "Reservation"
(
    "reservation-id"         serial
        primary key,
    "reservation-start-date" date    not null,
    "reservation-end-date"   date    not null,
    "stay-of-duration"       integer not null,
    "is-paid-for"            boolean not null,
    "is-approved-by-host"    boolean,
    "number-of-guests"       integer not null
);

alter table "Reservation"
    owner to oyfcmypj;

create table "Leaves"
(
    "reservation-id" integer not null
        references "Reservation"
            on delete cascade,
    "user-id1"       integer not null
        references "RegisteredUser"
            on delete cascade,
    "user-id2"       integer not null
        references "RegisteredUser"
            on delete cascade,
    "review-id"      integer not null
        references "Review"
            on delete cascade,
    primary key ("reservation-id", "user-id1", "user-id2")
);

alter table "Leaves"
    owner to oyfcmypj;

create table "ShoppingCart"
(
    "reservation-id" integer not null
        references "Reservation"
            on delete cascade,
    "user-id"        integer not null
        references "RegisteredUser"
            on delete cascade,
    "rental-id"      integer not null
        references "Rental"
            on delete cascade,
    primary key ("user-id", "rental-id")
);

alter table "ShoppingCart"
    owner to oyfcmypj;

create table "Transaction"
(
    "reservation-id"   integer     not null
        primary key
        references "Reservation"
            on delete cascade,
    "user-id"          integer     not null
        references "RegisteredUser"
            on delete cascade,
    "rental-id"        integer     not null
        references "Rental"
            on delete cascade,
    "transaction-type" varchar(20) not null,
    date               timestamp   not null,
    status             varchar(20) not null,
    amount             real        not null
);

alter table "Transaction"
    owner to oyfcmypj;

create table "Guest"
(
    "user-id"       integer     not null
        references "Customer"
            on delete cascade,
    "guest-id"      integer     not null,
    name            varchar(30) not null,
    surname         varchar(40) not null,
    "date-of-birth" date        not null,
    type            varchar(20),
    email           varchar(60),
    gender          varchar(20) not null,
    primary key ("user-id", "guest-id")
);

alter table "Guest"
    owner to oyfcmypj;

create table "Makes"
(
    "reservation-id" integer not null
        references "Reservation"
            on delete cascade,
    "user-id"        integer not null
        references "Customer"
            on delete cascade,
    "rental-id"      integer not null
        references "Rental"
            on delete cascade,
    primary key ("reservation-id", "rental-id")
);

alter table "Makes"
    owner to oyfcmypj;

create table "e-government_file"
(
    "file-id"          serial
        primary key,
    "file-binary-path" text        not null,
    "file-extension"   varchar(5)  not null,
    "file-name"        varchar(30) not null,
    "file-size"        real        not null
);

alter table "e-government_file"
    owner to oyfcmypj;

create table admin
(
    "user-id"  serial
        primary key,
    "admin-id" integer not null
);

alter table admin
    owner to oyfcmypj;

create table "User"
(
    "user-id" serial
        primary key,
    name      text not null,
    surname   text not null,
    password  text not null
);

alter table "User"
    owner to oyfcmypj;

create table "Amenities"
(
    "rental-id"              serial
        primary key
        references "Rental"
            on delete cascade,
    "smoke-alarm"            integer,
    "fire-extinguisher"      integer,
    "first-aid-kit"          integer,
    "free-parking"           integer,
    facilities               integer,
    "single-level-home"      integer,
    washer                   integer,
    "bed-linens"             integer,
    hangers                  integer,
    essentials               integer,
    "clothing-storage"       integer,
    "AC"                     integer,
    heating                  integer,
    "outdoor-dining-area"    integer,
    "bbq-grill"              integer,
    "pets-allowed"           integer,
    "daily-cleaning-service" integer,
    "transfer-service"       integer,
    fridge                   integer,
    oven                     integer,
    stove                    integer,
    dishwasher               integer,
    "dining-table"           integer,
    microwave                integer,
    dishes                   integer,
    "hair-conditioner"       integer,
    "cleaning-products"      integer,
    shampoo                  integer,
    "body-soap"              integer,
    "shower-gel"             integer,
    "hot-water"              integer,
    "beach-access"           integer,
    "hopping-access"         integer,
    "museum-access"          integer,
    "transportation-access"  integer,
    "airport-access"         integer,
    "private-entrance"       integer,
    beachfront               integer,
    crib                     integer
);

alter table "Amenities"
    owner to oyfcmypj;

create table amenities_list
(
    id   serial
        primary key,
    name varchar(100) not null
);

alter table amenities_list
    owner to oyfcmypj;

create view pg_stat_statements
            (userid, dbid, queryid, query, calls, total_time, min_time, max_time, mean_time, stddev_time, rows,
             shared_blks_hit, shared_blks_read, shared_blks_dirtied, shared_blks_written, local_blks_hit,
             local_blks_read, local_blks_dirtied, local_blks_written, temp_blks_read, temp_blks_written, blk_read_time,
             blk_write_time)
as
SELECT pg_stat_statements.userid,
       pg_stat_statements.dbid,
       pg_stat_statements.queryid,
       pg_stat_statements.query,
       pg_stat_statements.calls,
       pg_stat_statements.total_time,
       pg_stat_statements.min_time,
       pg_stat_statements.max_time,
       pg_stat_statements.mean_time,
       pg_stat_statements.stddev_time,
       pg_stat_statements.rows,
       pg_stat_statements.shared_blks_hit,
       pg_stat_statements.shared_blks_read,
       pg_stat_statements.shared_blks_dirtied,
       pg_stat_statements.shared_blks_written,
       pg_stat_statements.local_blks_hit,
       pg_stat_statements.local_blks_read,
       pg_stat_statements.local_blks_dirtied,
       pg_stat_statements.local_blks_written,
       pg_stat_statements.temp_blks_read,
       pg_stat_statements.temp_blks_written,
       pg_stat_statements.blk_read_time,
       pg_stat_statements.blk_write_time
FROM pg_stat_statements(true) pg_stat_statements(userid, dbid, queryid, query, calls, total_time, min_time, max_time,
                                                 mean_time, stddev_time, rows, shared_blks_hit, shared_blks_read,
                                                 shared_blks_dirtied, shared_blks_written, local_blks_hit,
                                                 local_blks_read, local_blks_dirtied, local_blks_written,
                                                 temp_blks_read, temp_blks_written, blk_read_time, blk_write_time);

alter table pg_stat_statements
    owner to postgres;

grant select on pg_stat_statements to public;

create function dblink_connect(text) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_connect(text) owner to postgres;

create function dblink_connect(text, text) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_connect(text, text) owner to postgres;

create function dblink_connect_u(text) returns text
    strict
    security definer
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_connect_u(text) owner to postgres;

create function dblink_connect_u(text, text) returns text
    strict
    security definer
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_connect_u(text, text) owner to postgres;

create function dblink_disconnect() returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_disconnect() owner to postgres;

create function dblink_disconnect(text) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_disconnect(text) owner to postgres;

create function dblink_open(text, text) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_open(text, text) owner to postgres;

create function dblink_open(text, text, boolean) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_open(text, text, boolean) owner to postgres;

create function dblink_open(text, text, text) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_open(text, text, text) owner to postgres;

create function dblink_open(text, text, text, boolean) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_open(text, text, text, boolean) owner to postgres;

create function dblink_fetch(text, integer) returns setof setof record
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function dblink_fetch(text, integer) owner to postgres;

create function dblink_fetch(text, integer, boolean) returns setof setof record
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function dblink_fetch(text, integer, boolean) owner to postgres;

create function dblink_fetch(text, text, integer) returns setof setof record
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function dblink_fetch(text, text, integer) owner to postgres;

create function dblink_fetch(text, text, integer, boolean) returns setof setof record
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function dblink_fetch(text, text, integer, boolean) owner to postgres;

create function dblink_close(text) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_close(text) owner to postgres;

create function dblink_close(text, boolean) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_close(text, boolean) owner to postgres;

create function dblink_close(text, text) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_close(text, text) owner to postgres;

create function dblink_close(text, text, boolean) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_close(text, text, boolean) owner to postgres;

create function dblink(text, text) returns setof setof record
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function dblink(text, text) owner to postgres;

create function dblink(text, text, boolean) returns setof setof record
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function dblink(text, text, boolean) owner to postgres;

create function dblink(text) returns setof setof record
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function dblink(text) owner to postgres;

create function dblink(text, boolean) returns setof setof record
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function dblink(text, boolean) owner to postgres;

create function dblink_exec(text, text) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_exec(text, text) owner to postgres;

create function dblink_exec(text, text, boolean) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_exec(text, text, boolean) owner to postgres;

create function dblink_exec(text) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_exec(text) owner to postgres;

create function dblink_exec(text, boolean) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_exec(text, boolean) owner to postgres;

create function dblink_get_pkey(text) returns setof setof dblink_pkey_results
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function dblink_get_pkey(text) owner to postgres;

create function dblink_build_sql_insert(text, int2vector, integer, text[], text[]) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_build_sql_insert(text, int2vector, integer, text[], text[]) owner to postgres;

create function dblink_build_sql_delete(text, int2vector, integer, text[]) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_build_sql_delete(text, int2vector, integer, text[]) owner to postgres;

create function dblink_build_sql_update(text, int2vector, integer, text[], text[]) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_build_sql_update(text, int2vector, integer, text[], text[]) owner to postgres;

create function dblink_current_query() returns text
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_current_query() owner to postgres;

create function dblink_send_query(text, text) returns integer
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_send_query(text, text) owner to postgres;

create function dblink_is_busy(text) returns integer
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_is_busy(text) owner to postgres;

create function dblink_get_result(text) returns setof setof record
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function dblink_get_result(text) owner to postgres;

create function dblink_get_result(text, boolean) returns setof setof record
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function dblink_get_result(text, boolean) owner to postgres;

create function dblink_get_connections() returns text[]
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_get_connections() owner to postgres;

create function dblink_cancel_query(text) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_cancel_query(text) owner to postgres;

create function dblink_error_message(text) returns text
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_error_message(text) owner to postgres;

create function dblink_get_notify(out notify_name text, out be_pid integer, out extra text) returns setof setof record
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function dblink_get_notify(out text, out integer, out text) owner to postgres;

create function dblink_get_notify(conname text, out notify_name text, out be_pid integer, out extra text) returns setof setof record
    strict
    parallel restricted
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function dblink_get_notify(text, out text, out integer, out text) owner to postgres;

create function dblink_fdw_validator(options text[], catalog oid) returns void
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dblink_fdw_validator(text[], oid) owner to postgres;

create function xml_valid(text) returns boolean
    stable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function xml_valid(text) owner to postgres;

create function xml_encode_special_chars(text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function xml_encode_special_chars(text) owner to postgres;

create function xpath_string(text, text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function xpath_string(text, text) owner to postgres;

create function xpath_nodeset(text, text, text, text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function xpath_nodeset(text, text, text, text) owner to postgres;

create function xpath_number(text, text) returns real
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function xpath_number(text, text) owner to postgres;

create function xpath_bool(text, text) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function xpath_bool(text, text) owner to postgres;

create function xpath_list(text, text, text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function xpath_list(text, text, text) owner to postgres;

create function xpath_list(text, text) returns text
    immutable
    strict
    parallel safe
    language sql
as
$$SELECT xpath_list($1,$2,',')$$;

alter function xpath_list(text, text) owner to postgres;

create function xpath_nodeset(text, text) returns text
    immutable
    strict
    parallel safe
    language sql
as
$$SELECT xpath_nodeset($1,$2,'','')$$;

alter function xpath_nodeset(text, text) owner to postgres;

create function xpath_nodeset(text, text, text) returns text
    immutable
    strict
    parallel safe
    language sql
as
$$SELECT xpath_nodeset($1,$2,'',$3)$$;

alter function xpath_nodeset(text, text, text) owner to postgres;

create function xpath_table(text, text, text, text, text) returns setof setof record
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function xpath_table(text, text, text, text, text) owner to postgres;

create function xslt_process(text, text, text) returns text
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function xslt_process(text, text, text) owner to postgres;

create function xslt_process(text, text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function xslt_process(text, text) owner to postgres;

create function ltree_in(cstring) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_in(cstring) owner to postgres;

create function ltree_out(ltree) returns cstring
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_out(ltree) owner to postgres;

create function ltree_cmp(ltree, ltree) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_cmp(ltree, ltree) owner to postgres;

create function ltree_lt(ltree, ltree) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_lt(ltree, ltree) owner to postgres;

create function ltree_le(ltree, ltree) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_le(ltree, ltree) owner to postgres;

create function ltree_eq(ltree, ltree) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_eq(ltree, ltree) owner to postgres;

create function ltree_ge(ltree, ltree) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_ge(ltree, ltree) owner to postgres;

create function ltree_gt(ltree, ltree) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_gt(ltree, ltree) owner to postgres;

create function ltree_ne(ltree, ltree) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_ne(ltree, ltree) owner to postgres;

create function subltree(ltree, integer, integer) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function subltree(ltree, integer, integer) owner to postgres;

create function subpath(ltree, integer, integer) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function subpath(ltree, integer, integer) owner to postgres;

create function subpath(ltree, integer) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function subpath(ltree, integer) owner to postgres;

create function index(ltree, ltree) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function index(ltree, ltree) owner to postgres;

create function index(ltree, ltree, integer) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function index(ltree, ltree, integer) owner to postgres;

create function nlevel(ltree) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function nlevel(ltree) owner to postgres;

create function ltree2text(ltree) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree2text(ltree) owner to postgres;

create function text2ltree(text) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function text2ltree(text) owner to postgres;

create function lca(ltree[]) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function lca(ltree[]) owner to postgres;

create function lca(ltree, ltree) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function lca(ltree, ltree) owner to postgres;

create function lca(ltree, ltree, ltree) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function lca(ltree, ltree, ltree) owner to postgres;

create function lca(ltree, ltree, ltree, ltree) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function lca(ltree, ltree, ltree, ltree) owner to postgres;

create function lca(ltree, ltree, ltree, ltree, ltree) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function lca(ltree, ltree, ltree, ltree, ltree) owner to postgres;

create function lca(ltree, ltree, ltree, ltree, ltree, ltree) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function lca(ltree, ltree, ltree, ltree, ltree, ltree) owner to postgres;

create function lca(ltree, ltree, ltree, ltree, ltree, ltree, ltree) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function lca(ltree, ltree, ltree, ltree, ltree, ltree, ltree) owner to postgres;

create function lca(ltree, ltree, ltree, ltree, ltree, ltree, ltree, ltree) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function lca(ltree, ltree, ltree, ltree, ltree, ltree, ltree, ltree) owner to postgres;

create function ltree_isparent(ltree, ltree) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_isparent(ltree, ltree) owner to postgres;

create function ltree_risparent(ltree, ltree) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_risparent(ltree, ltree) owner to postgres;

create function ltree_addltree(ltree, ltree) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_addltree(ltree, ltree) owner to postgres;

create function ltree_addtext(ltree, text) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_addtext(ltree, text) owner to postgres;

create function ltree_textadd(text, ltree) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_textadd(text, ltree) owner to postgres;

create function ltreeparentsel(internal, oid, internal, integer) returns double precision
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltreeparentsel(internal, oid, internal, integer) owner to postgres;

create function lquery_in(cstring) returns lquery
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function lquery_in(cstring) owner to postgres;

create function lquery_out(lquery) returns cstring
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function lquery_out(lquery) owner to postgres;

create function ltq_regex(ltree, lquery) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltq_regex(ltree, lquery) owner to postgres;

create function ltq_rregex(lquery, ltree) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltq_rregex(lquery, ltree) owner to postgres;

create function lt_q_regex(ltree, lquery[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function lt_q_regex(ltree, lquery[]) owner to postgres;

create function lt_q_rregex(lquery[], ltree) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function lt_q_rregex(lquery[], ltree) owner to postgres;

create function ltxtq_in(cstring) returns ltxtquery
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltxtq_in(cstring) owner to postgres;

create function ltxtq_out(ltxtquery) returns cstring
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltxtq_out(ltxtquery) owner to postgres;

create function ltxtq_exec(ltree, ltxtquery) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltxtq_exec(ltree, ltxtquery) owner to postgres;

create function ltxtq_rexec(ltxtquery, ltree) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltxtq_rexec(ltxtquery, ltree) owner to postgres;

create function ltree_gist_in(cstring) returns ltree_gist
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_gist_in(cstring) owner to postgres;

create function ltree_gist_out(ltree_gist) returns cstring
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_gist_out(ltree_gist) owner to postgres;

create function ltree_consistent(internal, ltree, smallint, oid, internal) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_consistent(internal, ltree, smallint, oid, internal) owner to postgres;

create function ltree_compress(internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_compress(internal) owner to postgres;

create function ltree_decompress(internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_decompress(internal) owner to postgres;

create function ltree_penalty(internal, internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_penalty(internal, internal, internal) owner to postgres;

create function ltree_picksplit(internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_picksplit(internal, internal) owner to postgres;

create function ltree_union(internal, internal) returns ltree_gist
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_union(internal, internal) owner to postgres;

create function ltree_same(ltree_gist, ltree_gist, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ltree_same(ltree_gist, ltree_gist, internal) owner to postgres;

create function _ltree_isparent(ltree[], ltree) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltree_isparent(ltree[], ltree) owner to postgres;

create function _ltree_r_isparent(ltree, ltree[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltree_r_isparent(ltree, ltree[]) owner to postgres;

create function _ltree_risparent(ltree[], ltree) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltree_risparent(ltree[], ltree) owner to postgres;

create function _ltree_r_risparent(ltree, ltree[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltree_r_risparent(ltree, ltree[]) owner to postgres;

create function _ltq_regex(ltree[], lquery) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltq_regex(ltree[], lquery) owner to postgres;

create function _ltq_rregex(lquery, ltree[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltq_rregex(lquery, ltree[]) owner to postgres;

create function _lt_q_regex(ltree[], lquery[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _lt_q_regex(ltree[], lquery[]) owner to postgres;

create function _lt_q_rregex(lquery[], ltree[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _lt_q_rregex(lquery[], ltree[]) owner to postgres;

create function _ltxtq_exec(ltree[], ltxtquery) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltxtq_exec(ltree[], ltxtquery) owner to postgres;

create function _ltxtq_rexec(ltxtquery, ltree[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltxtq_rexec(ltxtquery, ltree[]) owner to postgres;

create function _ltree_extract_isparent(ltree[], ltree) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltree_extract_isparent(ltree[], ltree) owner to postgres;

create function _ltree_extract_risparent(ltree[], ltree) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltree_extract_risparent(ltree[], ltree) owner to postgres;

create function _ltq_extract_regex(ltree[], lquery) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltq_extract_regex(ltree[], lquery) owner to postgres;

create function _ltxtq_extract_exec(ltree[], ltxtquery) returns ltree
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltxtq_extract_exec(ltree[], ltxtquery) owner to postgres;

create function _ltree_consistent(internal, ltree[], smallint, oid, internal) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltree_consistent(internal, ltree[], smallint, oid, internal) owner to postgres;

create function _ltree_compress(internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltree_compress(internal) owner to postgres;

create function _ltree_penalty(internal, internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltree_penalty(internal, internal, internal) owner to postgres;

create function _ltree_picksplit(internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltree_picksplit(internal, internal) owner to postgres;

create function _ltree_union(internal, internal) returns ltree_gist
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltree_union(internal, internal) owner to postgres;

create function _ltree_same(ltree_gist, ltree_gist, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _ltree_same(ltree_gist, ltree_gist, internal) owner to postgres;

create function pgstattuple(relname text, out table_len bigint, out tuple_count bigint, out tuple_len bigint, out tuple_percent double precision, out dead_tuple_count bigint, out dead_tuple_len bigint, out dead_tuple_percent double precision, out free_space bigint, out free_percent double precision) returns record
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgstattuple(text, out bigint, out bigint, out bigint, out double precision, out bigint, out bigint, out double precision, out bigint, out double precision) owner to postgres;

grant execute on function pgstattuple(text, out bigint, out bigint, out bigint, out double precision, out bigint, out bigint, out double precision, out bigint, out double precision) to pg_stat_scan_tables;

create function pgstatindex(relname text, out version integer, out tree_level integer, out index_size bigint, out root_block_no bigint, out internal_pages bigint, out leaf_pages bigint, out empty_pages bigint, out deleted_pages bigint, out avg_leaf_density double precision, out leaf_fragmentation double precision) returns record
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgstatindex(text, out integer, out integer, out bigint, out bigint, out bigint, out bigint, out bigint, out bigint, out double precision, out double precision) owner to postgres;

grant execute on function pgstatindex(text, out integer, out integer, out bigint, out bigint, out bigint, out bigint, out bigint, out bigint, out double precision, out double precision) to pg_stat_scan_tables;

create function pg_relpages(relname text) returns bigint
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pg_relpages(text) owner to postgres;

grant execute on function pg_relpages(text) to pg_stat_scan_tables;

create function pgstatginindex(relname regclass, out version integer, out pending_pages integer, out pending_tuples bigint) returns record
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgstatginindex(regclass, out integer, out integer, out bigint) owner to postgres;

grant execute on function pgstatginindex(regclass, out integer, out integer, out bigint) to pg_stat_scan_tables;

create function pgstattuple(reloid regclass, out table_len bigint, out tuple_count bigint, out tuple_len bigint, out tuple_percent double precision, out dead_tuple_count bigint, out dead_tuple_len bigint, out dead_tuple_percent double precision, out free_space bigint, out free_percent double precision) returns record
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgstattuple(regclass, out bigint, out bigint, out bigint, out double precision, out bigint, out bigint, out double precision, out bigint, out double precision) owner to postgres;

grant execute on function pgstattuple(regclass, out bigint, out bigint, out bigint, out double precision, out bigint, out bigint, out double precision, out bigint, out double precision) to pg_stat_scan_tables;

create function pgstatindex(relname regclass, out version integer, out tree_level integer, out index_size bigint, out root_block_no bigint, out internal_pages bigint, out leaf_pages bigint, out empty_pages bigint, out deleted_pages bigint, out avg_leaf_density double precision, out leaf_fragmentation double precision) returns record
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgstatindex(regclass, out integer, out integer, out bigint, out bigint, out bigint, out bigint, out bigint, out bigint, out double precision, out double precision) owner to postgres;

grant execute on function pgstatindex(regclass, out integer, out integer, out bigint, out bigint, out bigint, out bigint, out bigint, out bigint, out double precision, out double precision) to pg_stat_scan_tables;

create function pg_relpages(relname regclass) returns bigint
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pg_relpages(regclass) owner to postgres;

grant execute on function pg_relpages(regclass) to pg_stat_scan_tables;

create function pgstattuple_approx(reloid regclass, out table_len bigint, out scanned_percent double precision, out approx_tuple_count bigint, out approx_tuple_len bigint, out approx_tuple_percent double precision, out dead_tuple_count bigint, out dead_tuple_len bigint, out dead_tuple_percent double precision, out approx_free_space bigint, out approx_free_percent double precision) returns record
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgstattuple_approx(regclass, out bigint, out double precision, out bigint, out bigint, out double precision, out bigint, out bigint, out double precision, out bigint, out double precision) owner to postgres;

grant execute on function pgstattuple_approx(regclass, out bigint, out double precision, out bigint, out bigint, out double precision, out bigint, out bigint, out double precision, out bigint, out double precision) to pg_stat_scan_tables;

create function pgstathashindex(relname regclass, out version integer, out bucket_pages bigint, out overflow_pages bigint, out bitmap_pages bigint, out unused_pages bigint, out live_items bigint, out dead_items bigint, out free_percent double precision) returns record
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgstathashindex(regclass, out integer, out bigint, out bigint, out bigint, out bigint, out bigint, out bigint, out double precision) owner to postgres;

grant execute on function pgstathashindex(regclass, out integer, out bigint, out bigint, out bigint, out bigint, out bigint, out bigint, out double precision) to pg_stat_scan_tables;

create function normal_rand(integer, double precision, double precision) returns setof setof double precision
    strict
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function normal_rand(integer, double precision, double precision) owner to postgres;

create function crosstab(text) returns setof setof record
    stable
    strict
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function crosstab(text) owner to postgres;

create function crosstab2(text) returns setof setof tablefunc_crosstab_2
    stable
    strict
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function crosstab2(text) owner to postgres;

create function crosstab3(text) returns setof setof tablefunc_crosstab_3
    stable
    strict
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function crosstab3(text) owner to postgres;

create function crosstab4(text) returns setof setof tablefunc_crosstab_4
    stable
    strict
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function crosstab4(text) owner to postgres;

create function crosstab(text, integer) returns setof setof record
    stable
    strict
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function crosstab(text, integer) owner to postgres;

create function crosstab(text, text) returns setof setof record
    stable
    strict
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function crosstab(text, text) owner to postgres;

create function connectby(text, text, text, text, integer, text) returns setof setof record
    stable
    strict
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function connectby(text, text, text, text, integer, text) owner to postgres;

create function connectby(text, text, text, text, integer) returns setof setof record
    stable
    strict
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function connectby(text, text, text, text, integer) owner to postgres;

create function connectby(text, text, text, text, text, integer, text) returns setof setof record
    stable
    strict
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function connectby(text, text, text, text, text, integer, text) owner to postgres;

create function connectby(text, text, text, text, text, integer) returns setof setof record
    stable
    strict
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function connectby(text, text, text, text, text, integer) owner to postgres;

create function levenshtein(text, text) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function levenshtein(text, text) owner to postgres;

create function levenshtein(text, text, integer, integer, integer) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function levenshtein(text, text, integer, integer, integer) owner to postgres;

create function levenshtein_less_equal(text, text, integer) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function levenshtein_less_equal(text, text, integer) owner to postgres;

create function levenshtein_less_equal(text, text, integer, integer, integer, integer) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function levenshtein_less_equal(text, text, integer, integer, integer, integer) owner to postgres;

create function metaphone(text, integer) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function metaphone(text, integer) owner to postgres;

create function soundex(text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function soundex(text) owner to postgres;

create function text_soundex(text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function text_soundex(text) owner to postgres;

create function difference(text, text) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function difference(text, text) owner to postgres;

create function dmetaphone(text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dmetaphone(text) owner to postgres;

create function dmetaphone_alt(text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dmetaphone_alt(text) owner to postgres;

create function citextin(cstring) returns citext
    immutable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function citextin(cstring) owner to postgres;

create function citextout(citext) returns cstring
    immutable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function citextout(citext) owner to postgres;

create function citextrecv(internal) returns citext
    stable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function citextrecv(internal) owner to postgres;

create function citextsend(citext) returns bytea
    stable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function citextsend(citext) owner to postgres;

create function citext(char) returns citext
    immutable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function citext(char) owner to postgres;

create function citext(boolean) returns citext
    immutable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function citext(boolean) owner to postgres;

create function citext(inet) returns citext
    immutable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function citext(inet) owner to postgres;

create function citext_eq(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_eq(citext, citext) owner to postgres;

create function citext_ne(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_ne(citext, citext) owner to postgres;

create function citext_lt(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_lt(citext, citext) owner to postgres;

create function citext_le(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_le(citext, citext) owner to postgres;

create function citext_gt(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_gt(citext, citext) owner to postgres;

create function citext_ge(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_ge(citext, citext) owner to postgres;

create function citext_cmp(citext, citext) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_cmp(citext, citext) owner to postgres;

create function citext_hash(citext) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_hash(citext) owner to postgres;

create function citext_smaller(citext, citext) returns citext
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_smaller(citext, citext) owner to postgres;

create function citext_larger(citext, citext) returns citext
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_larger(citext, citext) owner to postgres;

create function texticlike(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function texticlike(citext, citext) owner to postgres;

create function texticnlike(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function texticnlike(citext, citext) owner to postgres;

create function texticregexeq(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function texticregexeq(citext, citext) owner to postgres;

create function texticregexne(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function texticregexne(citext, citext) owner to postgres;

create function texticlike(citext, text) returns boolean
    immutable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function texticlike(citext, text) owner to postgres;

create function texticnlike(citext, text) returns boolean
    immutable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function texticnlike(citext, text) owner to postgres;

create function texticregexeq(citext, text) returns boolean
    immutable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function texticregexeq(citext, text) owner to postgres;

create function texticregexne(citext, text) returns boolean
    immutable
    strict
    parallel safe
    cost 1
    language internal
as
$$
begin
-- missing source code
end;
$$;

alter function texticregexne(citext, text) owner to postgres;

create function regexp_match(citext, citext) returns text[]
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT pg_catalog.regexp_match( $1::pg_catalog.text, $2::pg_catalog.text, 'i' );
$$;

alter function regexp_match(citext, citext) owner to postgres;

create function regexp_match(citext, citext, text) returns text[]
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT pg_catalog.regexp_match( $1::pg_catalog.text, $2::pg_catalog.text, CASE WHEN pg_catalog.strpos($3, 'c') = 0 THEN  $3 || 'i' ELSE $3 END );
$$;

alter function regexp_match(citext, citext, text) owner to postgres;

create function regexp_matches(citext, citext) returns SETOF text[]
    immutable
    strict
    parallel safe
    rows 1
    language sql
as
$$
    SELECT pg_catalog.regexp_matches( $1::pg_catalog.text, $2::pg_catalog.text, 'i' );
$$;

alter function regexp_matches(citext, citext) owner to postgres;

create function regexp_matches(citext, citext, text) returns SETOF text[]
    immutable
    strict
    parallel safe
    rows 10
    language sql
as
$$
    SELECT pg_catalog.regexp_matches( $1::pg_catalog.text, $2::pg_catalog.text, CASE WHEN pg_catalog.strpos($3, 'c') = 0 THEN  $3 || 'i' ELSE $3 END );
$$;

alter function regexp_matches(citext, citext, text) owner to postgres;

create function regexp_replace(citext, citext, text) returns text
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT pg_catalog.regexp_replace( $1::pg_catalog.text, $2::pg_catalog.text, $3, 'i');
$$;

alter function regexp_replace(citext, citext, text) owner to postgres;

create function regexp_replace(citext, citext, text, text) returns text
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT pg_catalog.regexp_replace( $1::pg_catalog.text, $2::pg_catalog.text, $3, CASE WHEN pg_catalog.strpos($4, 'c') = 0 THEN  $4 || 'i' ELSE $4 END);
$$;

alter function regexp_replace(citext, citext, text, text) owner to postgres;

create function regexp_split_to_array(citext, citext) returns text[]
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT pg_catalog.regexp_split_to_array( $1::pg_catalog.text, $2::pg_catalog.text, 'i' );
$$;

alter function regexp_split_to_array(citext, citext) owner to postgres;

create function regexp_split_to_array(citext, citext, text) returns text[]
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT pg_catalog.regexp_split_to_array( $1::pg_catalog.text, $2::pg_catalog.text, CASE WHEN pg_catalog.strpos($3, 'c') = 0 THEN  $3 || 'i' ELSE $3 END );
$$;

alter function regexp_split_to_array(citext, citext, text) owner to postgres;

create function regexp_split_to_table(citext, citext) returns SETOF text
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT pg_catalog.regexp_split_to_table( $1::pg_catalog.text, $2::pg_catalog.text, 'i' );
$$;

alter function regexp_split_to_table(citext, citext) owner to postgres;

create function regexp_split_to_table(citext, citext, text) returns SETOF text
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT pg_catalog.regexp_split_to_table( $1::pg_catalog.text, $2::pg_catalog.text, CASE WHEN pg_catalog.strpos($3, 'c') = 0 THEN  $3 || 'i' ELSE $3 END );
$$;

alter function regexp_split_to_table(citext, citext, text) owner to postgres;

create function strpos(citext, citext) returns integer
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT pg_catalog.strpos( pg_catalog.lower( $1::pg_catalog.text ), pg_catalog.lower( $2::pg_catalog.text ) );
$$;

alter function strpos(citext, citext) owner to postgres;

create function replace(citext, citext, citext) returns text
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT pg_catalog.regexp_replace( $1::pg_catalog.text, pg_catalog.regexp_replace($2::pg_catalog.text, '([^a-zA-Z_0-9])', E'\\\\\\1', 'g'), $3::pg_catalog.text, 'gi' );
$$;

alter function replace(citext, citext, citext) owner to postgres;

create function split_part(citext, citext, integer) returns text
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT (pg_catalog.regexp_split_to_array( $1::pg_catalog.text, pg_catalog.regexp_replace($2::pg_catalog.text, '([^a-zA-Z_0-9])', E'\\\\\\1', 'g'), 'i'))[$3];
$$;

alter function split_part(citext, citext, integer) owner to postgres;

create function translate(citext, citext, text) returns text
    immutable
    strict
    parallel safe
    language sql
as
$$
    SELECT pg_catalog.translate( pg_catalog.translate( $1::pg_catalog.text, pg_catalog.lower($2::pg_catalog.text), $3), pg_catalog.upper($2::pg_catalog.text), $3);
$$;

alter function translate(citext, citext, text) owner to postgres;

create function citext_pattern_lt(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_pattern_lt(citext, citext) owner to postgres;

create function citext_pattern_le(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_pattern_le(citext, citext) owner to postgres;

create function citext_pattern_gt(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_pattern_gt(citext, citext) owner to postgres;

create function citext_pattern_ge(citext, citext) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_pattern_ge(citext, citext) owner to postgres;

create function citext_pattern_cmp(citext, citext) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function citext_pattern_cmp(citext, citext) owner to postgres;

create function uuid_nil() returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_nil() owner to postgres;

create function uuid_ns_dns() returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_ns_dns() owner to postgres;

create function uuid_ns_url() returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_ns_url() owner to postgres;

create function uuid_ns_oid() returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_ns_oid() owner to postgres;

create function uuid_ns_x500() returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_ns_x500() owner to postgres;

create function uuid_generate_v1() returns uuid
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_generate_v1() owner to postgres;

create function uuid_generate_v1mc() returns uuid
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_generate_v1mc() owner to postgres;

create function uuid_generate_v3(namespace uuid, name text) returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_generate_v3(uuid, text) owner to postgres;

create function uuid_generate_v4() returns uuid
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_generate_v4() owner to postgres;

create function uuid_generate_v5(namespace uuid, name text) returns uuid
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uuid_generate_v5(uuid, text) owner to postgres;

create function digest(text, text) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function digest(text, text) owner to postgres;

create function digest(bytea, text) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function digest(bytea, text) owner to postgres;

create function hmac(text, text, text) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hmac(text, text, text) owner to postgres;

create function hmac(bytea, bytea, text) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hmac(bytea, bytea, text) owner to postgres;

create function crypt(text, text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function crypt(text, text) owner to postgres;

create function gen_salt(text) returns text
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gen_salt(text) owner to postgres;

create function gen_salt(text, integer) returns text
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gen_salt(text, integer) owner to postgres;

create function encrypt(bytea, bytea, text) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function encrypt(bytea, bytea, text) owner to postgres;

create function decrypt(bytea, bytea, text) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function decrypt(bytea, bytea, text) owner to postgres;

create function encrypt_iv(bytea, bytea, bytea, text) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function encrypt_iv(bytea, bytea, bytea, text) owner to postgres;

create function decrypt_iv(bytea, bytea, bytea, text) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function decrypt_iv(bytea, bytea, bytea, text) owner to postgres;

create function gen_random_bytes(integer) returns bytea
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gen_random_bytes(integer) owner to postgres;

create function gen_random_uuid() returns uuid
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gen_random_uuid() owner to postgres;

create function pgp_sym_encrypt(text, text) returns bytea
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_sym_encrypt(text, text) owner to postgres;

create function pgp_sym_encrypt_bytea(bytea, text) returns bytea
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_sym_encrypt_bytea(bytea, text) owner to postgres;

create function pgp_sym_encrypt(text, text, text) returns bytea
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_sym_encrypt(text, text, text) owner to postgres;

create function pgp_sym_encrypt_bytea(bytea, text, text) returns bytea
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_sym_encrypt_bytea(bytea, text, text) owner to postgres;

create function pgp_sym_decrypt(bytea, text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_sym_decrypt(bytea, text) owner to postgres;

create function pgp_sym_decrypt_bytea(bytea, text) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_sym_decrypt_bytea(bytea, text) owner to postgres;

create function pgp_sym_decrypt(bytea, text, text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_sym_decrypt(bytea, text, text) owner to postgres;

create function pgp_sym_decrypt_bytea(bytea, text, text) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_sym_decrypt_bytea(bytea, text, text) owner to postgres;

create function pgp_pub_encrypt(text, bytea) returns bytea
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_pub_encrypt(text, bytea) owner to postgres;

create function pgp_pub_encrypt_bytea(bytea, bytea) returns bytea
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_pub_encrypt_bytea(bytea, bytea) owner to postgres;

create function pgp_pub_encrypt(text, bytea, text) returns bytea
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_pub_encrypt(text, bytea, text) owner to postgres;

create function pgp_pub_encrypt_bytea(bytea, bytea, text) returns bytea
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_pub_encrypt_bytea(bytea, bytea, text) owner to postgres;

create function pgp_pub_decrypt(bytea, bytea) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_pub_decrypt(bytea, bytea) owner to postgres;

create function pgp_pub_decrypt_bytea(bytea, bytea) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_pub_decrypt_bytea(bytea, bytea) owner to postgres;

create function pgp_pub_decrypt(bytea, bytea, text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_pub_decrypt(bytea, bytea, text) owner to postgres;

create function pgp_pub_decrypt_bytea(bytea, bytea, text) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_pub_decrypt_bytea(bytea, bytea, text) owner to postgres;

create function pgp_pub_decrypt(bytea, bytea, text, text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_pub_decrypt(bytea, bytea, text, text) owner to postgres;

create function pgp_pub_decrypt_bytea(bytea, bytea, text, text) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_pub_decrypt_bytea(bytea, bytea, text, text) owner to postgres;

create function pgp_key_id(bytea) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pgp_key_id(bytea) owner to postgres;

create function armor(bytea) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function armor(bytea) owner to postgres;

create function armor(bytea, text[], text[]) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function armor(bytea, text[], text[]) owner to postgres;

create function dearmor(text) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dearmor(text) owner to postgres;

create function pgp_armor_headers(text, out key text, out value text) returns setof setof record
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function pgp_armor_headers(text, out text, out text) owner to postgres;

create function set_limit(real) returns real
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function set_limit(real) owner to postgres;

create function show_limit() returns real
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function show_limit() owner to postgres;

create function show_trgm(text) returns text[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function show_trgm(text) owner to postgres;

create function similarity(text, text) returns real
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function similarity(text, text) owner to postgres;

create function similarity_op(text, text) returns boolean
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function similarity_op(text, text) owner to postgres;

create function word_similarity(text, text) returns real
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function word_similarity(text, text) owner to postgres;

create function word_similarity_op(text, text) returns boolean
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function word_similarity_op(text, text) owner to postgres;

create function word_similarity_commutator_op(text, text) returns boolean
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function word_similarity_commutator_op(text, text) owner to postgres;

create function similarity_dist(text, text) returns real
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function similarity_dist(text, text) owner to postgres;

create function word_similarity_dist_op(text, text) returns real
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function word_similarity_dist_op(text, text) owner to postgres;

create function word_similarity_dist_commutator_op(text, text) returns real
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function word_similarity_dist_commutator_op(text, text) owner to postgres;

create function gtrgm_in(cstring) returns gtrgm
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gtrgm_in(cstring) owner to postgres;

create function gtrgm_out(gtrgm) returns cstring
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gtrgm_out(gtrgm) owner to postgres;

create function gtrgm_consistent(internal, text, smallint, oid, internal) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gtrgm_consistent(internal, text, smallint, oid, internal) owner to postgres;

create function gtrgm_distance(internal, text, smallint, oid, internal) returns double precision
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gtrgm_distance(internal, text, smallint, oid, internal) owner to postgres;

create function gtrgm_compress(internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gtrgm_compress(internal) owner to postgres;

create function gtrgm_decompress(internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gtrgm_decompress(internal) owner to postgres;

create function gtrgm_penalty(internal, internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gtrgm_penalty(internal, internal, internal) owner to postgres;

create function gtrgm_picksplit(internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gtrgm_picksplit(internal, internal) owner to postgres;

create function gtrgm_union(internal, internal) returns gtrgm
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gtrgm_union(internal, internal) owner to postgres;

create function gtrgm_same(gtrgm, gtrgm, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gtrgm_same(gtrgm, gtrgm, internal) owner to postgres;

create function gin_extract_value_trgm(text, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_trgm(text, internal) owner to postgres;

create function gin_extract_query_trgm(text, internal, smallint, internal, internal, internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_trgm(text, internal, smallint, internal, internal, internal, internal) owner to postgres;

create function gin_trgm_consistent(internal, smallint, text, integer, internal, internal, internal, internal) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_trgm_consistent(internal, smallint, text, integer, internal, internal, internal, internal) owner to postgres;

create function gin_trgm_triconsistent(internal, smallint, text, integer, internal, internal, internal) returns "char"
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_trgm_triconsistent(internal, smallint, text, integer, internal, internal, internal) owner to postgres;

create function strict_word_similarity(text, text) returns real
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function strict_word_similarity(text, text) owner to postgres;

create function strict_word_similarity_op(text, text) returns boolean
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function strict_word_similarity_op(text, text) owner to postgres;

create function strict_word_similarity_commutator_op(text, text) returns boolean
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function strict_word_similarity_commutator_op(text, text) owner to postgres;

create function strict_word_similarity_dist_op(text, text) returns real
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function strict_word_similarity_dist_op(text, text) owner to postgres;

create function strict_word_similarity_dist_commutator_op(text, text) returns real
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function strict_word_similarity_dist_commutator_op(text, text) owner to postgres;

create function bqarr_in(cstring) returns query_int
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function bqarr_in(cstring) owner to postgres;

create function bqarr_out(query_int) returns cstring
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function bqarr_out(query_int) owner to postgres;

create function querytree(query_int) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function querytree(query_int) owner to postgres;

create function boolop(integer[], query_int) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function boolop(integer[], query_int) is 'boolean operation with array';

alter function boolop(integer[], query_int) owner to postgres;

create function rboolop(query_int, integer[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function rboolop(query_int, integer[]) is 'boolean operation with array';

alter function rboolop(query_int, integer[]) owner to postgres;

create function _int_matchsel(internal, oid, internal, integer) returns double precision
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _int_matchsel(internal, oid, internal, integer) owner to postgres;

create function _int_contains(integer[], integer[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function _int_contains(integer[], integer[]) is 'contains';

alter function _int_contains(integer[], integer[]) owner to postgres;

create function _int_contained(integer[], integer[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function _int_contained(integer[], integer[]) is 'contained in';

alter function _int_contained(integer[], integer[]) owner to postgres;

create function _int_overlap(integer[], integer[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function _int_overlap(integer[], integer[]) is 'overlaps';

alter function _int_overlap(integer[], integer[]) owner to postgres;

create function _int_same(integer[], integer[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function _int_same(integer[], integer[]) is 'same as';

alter function _int_same(integer[], integer[]) owner to postgres;

create function _int_different(integer[], integer[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function _int_different(integer[], integer[]) is 'different';

alter function _int_different(integer[], integer[]) owner to postgres;

create function _int_union(integer[], integer[]) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _int_union(integer[], integer[]) owner to postgres;

create function _int_inter(integer[], integer[]) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _int_inter(integer[], integer[]) owner to postgres;

create function _int_overlap_sel(internal, oid, internal, integer) returns double precision
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _int_overlap_sel(internal, oid, internal, integer) owner to postgres;

create function _int_contains_sel(internal, oid, internal, integer) returns double precision
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _int_contains_sel(internal, oid, internal, integer) owner to postgres;

create function _int_contained_sel(internal, oid, internal, integer) returns double precision
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _int_contained_sel(internal, oid, internal, integer) owner to postgres;

create function _int_overlap_joinsel(internal, oid, internal, smallint, internal) returns double precision
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _int_overlap_joinsel(internal, oid, internal, smallint, internal) owner to postgres;

create function _int_contains_joinsel(internal, oid, internal, smallint, internal) returns double precision
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _int_contains_joinsel(internal, oid, internal, smallint, internal) owner to postgres;

create function _int_contained_joinsel(internal, oid, internal, smallint, internal) returns double precision
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _int_contained_joinsel(internal, oid, internal, smallint, internal) owner to postgres;

create function intset(integer) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function intset(integer) owner to postgres;

create function icount(integer[]) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function icount(integer[]) owner to postgres;

create function sort(integer[], text) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function sort(integer[], text) owner to postgres;

create function sort(integer[]) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function sort(integer[]) owner to postgres;

create function sort_asc(integer[]) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function sort_asc(integer[]) owner to postgres;

create function sort_desc(integer[]) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function sort_desc(integer[]) owner to postgres;

create function uniq(integer[]) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function uniq(integer[]) owner to postgres;

create function idx(integer[], integer) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function idx(integer[], integer) owner to postgres;

create function subarray(integer[], integer, integer) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function subarray(integer[], integer, integer) owner to postgres;

create function subarray(integer[], integer) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function subarray(integer[], integer) owner to postgres;

create function intarray_push_elem(integer[], integer) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function intarray_push_elem(integer[], integer) owner to postgres;

create function intarray_push_array(integer[], integer[]) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function intarray_push_array(integer[], integer[]) owner to postgres;

create function intarray_del_elem(integer[], integer) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function intarray_del_elem(integer[], integer) owner to postgres;

create function intset_union_elem(integer[], integer) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function intset_union_elem(integer[], integer) owner to postgres;

create function intset_subtract(integer[], integer[]) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function intset_subtract(integer[], integer[]) owner to postgres;

create function g_int_consistent(internal, integer[], smallint, oid, internal) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_int_consistent(internal, integer[], smallint, oid, internal) owner to postgres;

create function g_int_compress(internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_int_compress(internal) owner to postgres;

create function g_int_decompress(internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_int_decompress(internal) owner to postgres;

create function g_int_penalty(internal, internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_int_penalty(internal, internal, internal) owner to postgres;

create function g_int_picksplit(internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_int_picksplit(internal, internal) owner to postgres;

create function g_int_union(internal, internal) returns integer[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_int_union(internal, internal) owner to postgres;

create function g_int_same(integer[], integer[], internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_int_same(integer[], integer[], internal) owner to postgres;

create function _intbig_in(cstring) returns intbig_gkey
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _intbig_in(cstring) owner to postgres;

create function _intbig_out(intbig_gkey) returns cstring
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function _intbig_out(intbig_gkey) owner to postgres;

create function g_intbig_consistent(internal, integer[], smallint, oid, internal) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_intbig_consistent(internal, integer[], smallint, oid, internal) owner to postgres;

create function g_intbig_compress(internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_intbig_compress(internal) owner to postgres;

create function g_intbig_decompress(internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_intbig_decompress(internal) owner to postgres;

create function g_intbig_penalty(internal, internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_intbig_penalty(internal, internal, internal) owner to postgres;

create function g_intbig_picksplit(internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_intbig_picksplit(internal, internal) owner to postgres;

create function g_intbig_union(internal, internal) returns intbig_gkey
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_intbig_union(internal, internal) owner to postgres;

create function g_intbig_same(intbig_gkey, intbig_gkey, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_intbig_same(intbig_gkey, intbig_gkey, internal) owner to postgres;

create function ginint4_queryextract(integer[], internal, smallint, internal, internal, internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ginint4_queryextract(integer[], internal, smallint, internal, internal, internal, internal) owner to postgres;

create function ginint4_consistent(internal, smallint, integer[], integer, internal, internal, internal, internal) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ginint4_consistent(internal, smallint, integer[], integer, internal, internal, internal, internal) owner to postgres;

create function hstore_in(cstring) returns hstore
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_in(cstring) owner to postgres;

create function hstore_out(hstore) returns cstring
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_out(hstore) owner to postgres;

create function hstore_recv(internal) returns hstore
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_recv(internal) owner to postgres;

create function hstore_send(hstore) returns bytea
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_send(hstore) owner to postgres;

create function hstore_version_diag(hstore) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_version_diag(hstore) owner to postgres;

create function fetchval(hstore, text) returns text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function fetchval(hstore, text) owner to postgres;

create function slice_array(hstore, text[]) returns text[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function slice_array(hstore, text[]) owner to postgres;

create function slice(hstore, text[]) returns hstore
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function slice(hstore, text[]) owner to postgres;

create function isexists(hstore, text) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function isexists(hstore, text) owner to postgres;

create function exist(hstore, text) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function exist(hstore, text) owner to postgres;

create function exists_any(hstore, text[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function exists_any(hstore, text[]) owner to postgres;

create function exists_all(hstore, text[]) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function exists_all(hstore, text[]) owner to postgres;

create function isdefined(hstore, text) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function isdefined(hstore, text) owner to postgres;

create function defined(hstore, text) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function defined(hstore, text) owner to postgres;

create function delete(hstore, text) returns hstore
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function delete(hstore, text) owner to postgres;

create function delete(hstore, text[]) returns hstore
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function delete(hstore, text[]) owner to postgres;

create function delete(hstore, hstore) returns hstore
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function delete(hstore, hstore) owner to postgres;

create function hs_concat(hstore, hstore) returns hstore
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hs_concat(hstore, hstore) owner to postgres;

create function hs_contains(hstore, hstore) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hs_contains(hstore, hstore) owner to postgres;

create function hs_contained(hstore, hstore) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hs_contained(hstore, hstore) owner to postgres;

create function tconvert(text, text) returns hstore
    immutable
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function tconvert(text, text) owner to postgres;

create function hstore(text, text) returns hstore
    immutable
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore(text, text) owner to postgres;

create function hstore(text[], text[]) returns hstore
    immutable
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore(text[], text[]) owner to postgres;

create function hstore(text[]) returns hstore
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore(text[]) owner to postgres;

create function hstore_to_json(hstore) returns json
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_to_json(hstore) owner to postgres;

create function hstore_to_json_loose(hstore) returns json
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_to_json_loose(hstore) owner to postgres;

create function hstore_to_jsonb(hstore) returns jsonb
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_to_jsonb(hstore) owner to postgres;

create function hstore_to_jsonb_loose(hstore) returns jsonb
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_to_jsonb_loose(hstore) owner to postgres;

create function hstore(record) returns hstore
    immutable
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore(record) owner to postgres;

create function hstore_to_array(hstore) returns text[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_to_array(hstore) owner to postgres;

create function hstore_to_matrix(hstore) returns text[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_to_matrix(hstore) owner to postgres;

create function akeys(hstore) returns text[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function akeys(hstore) owner to postgres;

create function avals(hstore) returns text[]
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function avals(hstore) owner to postgres;

create function skeys(hstore) returns setof setof text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function skeys(hstore) owner to postgres;

create function svals(hstore) returns setof setof text
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function svals(hstore) owner to postgres;

create function each(hs hstore, out key text, out value text) returns setof setof record
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function each(hstore, out text, out text) owner to postgres;

create function populate_record(anyelement, hstore) returns anyelement
    immutable
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function populate_record(anyelement, hstore) owner to postgres;

create function hstore_eq(hstore, hstore) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_eq(hstore, hstore) owner to postgres;

create function hstore_ne(hstore, hstore) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_ne(hstore, hstore) owner to postgres;

create function hstore_gt(hstore, hstore) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_gt(hstore, hstore) owner to postgres;

create function hstore_ge(hstore, hstore) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_ge(hstore, hstore) owner to postgres;

create function hstore_lt(hstore, hstore) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_lt(hstore, hstore) owner to postgres;

create function hstore_le(hstore, hstore) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_le(hstore, hstore) owner to postgres;

create function hstore_cmp(hstore, hstore) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_cmp(hstore, hstore) owner to postgres;

create function hstore_hash(hstore) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function hstore_hash(hstore) owner to postgres;

create function ghstore_in(cstring) returns ghstore
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ghstore_in(cstring) owner to postgres;

create function ghstore_out(ghstore) returns cstring
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ghstore_out(ghstore) owner to postgres;

create function ghstore_compress(internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ghstore_compress(internal) owner to postgres;

create function ghstore_decompress(internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ghstore_decompress(internal) owner to postgres;

create function ghstore_penalty(internal, internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ghstore_penalty(internal, internal, internal) owner to postgres;

create function ghstore_picksplit(internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ghstore_picksplit(internal, internal) owner to postgres;

create function ghstore_union(internal, internal) returns ghstore
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ghstore_union(internal, internal) owner to postgres;

create function ghstore_same(ghstore, ghstore, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ghstore_same(ghstore, ghstore, internal) owner to postgres;

create function ghstore_consistent(internal, hstore, smallint, oid, internal) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ghstore_consistent(internal, hstore, smallint, oid, internal) owner to postgres;

create function gin_extract_hstore(hstore, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_hstore(hstore, internal) owner to postgres;

create function gin_extract_hstore_query(hstore, internal, smallint, internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_hstore_query(hstore, internal, smallint, internal, internal) owner to postgres;

create function gin_consistent_hstore(internal, smallint, hstore, integer, internal, internal) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_consistent_hstore(internal, smallint, hstore, integer, internal, internal) owner to postgres;

create function dintdict_init(internal) returns internal
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dintdict_init(internal) owner to postgres;

create function dintdict_lexize(internal, internal, internal, internal) returns internal
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dintdict_lexize(internal, internal, internal, internal) owner to postgres;

create function gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal) owner to postgres;

create function gin_extract_value_int2(smallint, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_int2(smallint, internal) owner to postgres;

create function gin_compare_prefix_int2(smallint, smallint, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_int2(smallint, smallint, smallint, internal) owner to postgres;

create function gin_extract_query_int2(smallint, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_int2(smallint, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_int4(integer, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_int4(integer, internal) owner to postgres;

create function gin_compare_prefix_int4(integer, integer, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_int4(integer, integer, smallint, internal) owner to postgres;

create function gin_extract_query_int4(integer, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_int4(integer, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_int8(bigint, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_int8(bigint, internal) owner to postgres;

create function gin_compare_prefix_int8(bigint, bigint, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_int8(bigint, bigint, smallint, internal) owner to postgres;

create function gin_extract_query_int8(bigint, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_int8(bigint, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_float4(real, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_float4(real, internal) owner to postgres;

create function gin_compare_prefix_float4(real, real, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_float4(real, real, smallint, internal) owner to postgres;

create function gin_extract_query_float4(real, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_float4(real, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_float8(double precision, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_float8(double precision, internal) owner to postgres;

create function gin_compare_prefix_float8(double precision, double precision, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_float8(double precision, double precision, smallint, internal) owner to postgres;

create function gin_extract_query_float8(double precision, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_float8(double precision, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_money(money, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_money(money, internal) owner to postgres;

create function gin_compare_prefix_money(money, money, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_money(money, money, smallint, internal) owner to postgres;

create function gin_extract_query_money(money, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_money(money, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_oid(oid, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_oid(oid, internal) owner to postgres;

create function gin_compare_prefix_oid(oid, oid, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_oid(oid, oid, smallint, internal) owner to postgres;

create function gin_extract_query_oid(oid, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_oid(oid, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_timestamp(timestamp, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_timestamp(timestamp, internal) owner to postgres;

create function gin_compare_prefix_timestamp(timestamp, timestamp, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_timestamp(timestamp, timestamp, smallint, internal) owner to postgres;

create function gin_extract_query_timestamp(timestamp, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_timestamp(timestamp, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_timestamptz(timestamp with time zone, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_timestamptz(timestamp with time zone, internal) owner to postgres;

create function gin_compare_prefix_timestamptz(timestamp with time zone, timestamp with time zone, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_timestamptz(timestamp with time zone, timestamp with time zone, smallint, internal) owner to postgres;

create function gin_extract_query_timestamptz(timestamp with time zone, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_timestamptz(timestamp with time zone, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_time(time, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_time(time, internal) owner to postgres;

create function gin_compare_prefix_time(time, time, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_time(time, time, smallint, internal) owner to postgres;

create function gin_extract_query_time(time, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_time(time, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_timetz(time with time zone, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_timetz(time with time zone, internal) owner to postgres;

create function gin_compare_prefix_timetz(time with time zone, time with time zone, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_timetz(time with time zone, time with time zone, smallint, internal) owner to postgres;

create function gin_extract_query_timetz(time with time zone, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_timetz(time with time zone, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_date(date, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_date(date, internal) owner to postgres;

create function gin_compare_prefix_date(date, date, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_date(date, date, smallint, internal) owner to postgres;

create function gin_extract_query_date(date, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_date(date, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_interval(interval, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_interval(interval, internal) owner to postgres;

create function gin_compare_prefix_interval(interval, interval, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_interval(interval, interval, smallint, internal) owner to postgres;

create function gin_extract_query_interval(interval, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_interval(interval, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_macaddr(macaddr, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_macaddr(macaddr, internal) owner to postgres;

create function gin_compare_prefix_macaddr(macaddr, macaddr, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_macaddr(macaddr, macaddr, smallint, internal) owner to postgres;

create function gin_extract_query_macaddr(macaddr, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_macaddr(macaddr, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_inet(inet, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_inet(inet, internal) owner to postgres;

create function gin_compare_prefix_inet(inet, inet, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_inet(inet, inet, smallint, internal) owner to postgres;

create function gin_extract_query_inet(inet, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_inet(inet, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_cidr(cidr, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_cidr(cidr, internal) owner to postgres;

create function gin_compare_prefix_cidr(cidr, cidr, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_cidr(cidr, cidr, smallint, internal) owner to postgres;

create function gin_extract_query_cidr(cidr, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_cidr(cidr, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_text(text, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_text(text, internal) owner to postgres;

create function gin_compare_prefix_text(text, text, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_text(text, text, smallint, internal) owner to postgres;

create function gin_extract_query_text(text, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_text(text, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_char("char", internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_char("char", internal) owner to postgres;

create function gin_compare_prefix_char("char", "char", smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_char("char", "char", smallint, internal) owner to postgres;

create function gin_extract_query_char("char", internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_char("char", internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_bytea(bytea, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_bytea(bytea, internal) owner to postgres;

create function gin_compare_prefix_bytea(bytea, bytea, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_bytea(bytea, bytea, smallint, internal) owner to postgres;

create function gin_extract_query_bytea(bytea, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_bytea(bytea, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_bit(bit, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_bit(bit, internal) owner to postgres;

create function gin_compare_prefix_bit(bit, bit, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_bit(bit, bit, smallint, internal) owner to postgres;

create function gin_extract_query_bit(bit, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_bit(bit, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_varbit(bit varying, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_varbit(bit varying, internal) owner to postgres;

create function gin_compare_prefix_varbit(bit varying, bit varying, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_varbit(bit varying, bit varying, smallint, internal) owner to postgres;

create function gin_extract_query_varbit(bit varying, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_varbit(bit varying, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_numeric(numeric, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_numeric(numeric, internal) owner to postgres;

create function gin_compare_prefix_numeric(numeric, numeric, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_numeric(numeric, numeric, smallint, internal) owner to postgres;

create function gin_extract_query_numeric(numeric, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_numeric(numeric, internal, smallint, internal, internal) owner to postgres;

create function gin_numeric_cmp(numeric, numeric) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_numeric_cmp(numeric, numeric) owner to postgres;

create function gin_extract_value_macaddr8(macaddr8, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_macaddr8(macaddr8, internal) owner to postgres;

create function gin_compare_prefix_macaddr8(macaddr8, macaddr8, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_macaddr8(macaddr8, macaddr8, smallint, internal) owner to postgres;

create function gin_extract_query_macaddr8(macaddr8, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_macaddr8(macaddr8, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_anyenum(anyenum, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_anyenum(anyenum, internal) owner to postgres;

create function gin_compare_prefix_anyenum(anyenum, anyenum, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_anyenum(anyenum, anyenum, smallint, internal) owner to postgres;

create function gin_extract_query_anyenum(anyenum, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_anyenum(anyenum, internal, smallint, internal, internal) owner to postgres;

create function gin_enum_cmp(anyenum, anyenum) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_enum_cmp(anyenum, anyenum) owner to postgres;

create function gin_extract_value_uuid(uuid, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_uuid(uuid, internal) owner to postgres;

create function gin_compare_prefix_uuid(uuid, uuid, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_uuid(uuid, uuid, smallint, internal) owner to postgres;

create function gin_extract_query_uuid(uuid, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_uuid(uuid, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_name(name, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_name(name, internal) owner to postgres;

create function gin_compare_prefix_name(name, name, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_name(name, name, smallint, internal) owner to postgres;

create function gin_extract_query_name(name, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_name(name, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_bool(boolean, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_bool(boolean, internal) owner to postgres;

create function gin_compare_prefix_bool(boolean, boolean, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_bool(boolean, boolean, smallint, internal) owner to postgres;

create function gin_extract_query_bool(boolean, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_bool(boolean, internal, smallint, internal, internal) owner to postgres;

create function gin_extract_value_bpchar(char, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_value_bpchar(char, internal) owner to postgres;

create function gin_compare_prefix_bpchar(char, char, smallint, internal) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_compare_prefix_bpchar(char, char, smallint, internal) owner to postgres;

create function gin_extract_query_bpchar(char, internal, smallint, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gin_extract_query_bpchar(char, internal, smallint, internal, internal) owner to postgres;

create function pgrowlocks(relname text, out locked_row tid, out locker xid, out multi boolean, out xids xid[], out modes text[], out pids integer[]) returns setof setof record
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function pgrowlocks(text, out tid, out xid, out boolean, out xid[], out text[], out integer[]) owner to postgres;

create function cube_in(cstring) returns cube
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_in(cstring) owner to postgres;

create function cube(double precision[], double precision[]) returns cube
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube(double precision[], double precision[]) owner to postgres;

create function cube(double precision[]) returns cube
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube(double precision[]) owner to postgres;

create function cube_out(cube) returns cstring
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_out(cube) owner to postgres;

create function cube_eq(cube, cube) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function cube_eq(cube, cube) is 'same as';

alter function cube_eq(cube, cube) owner to postgres;

create function cube_ne(cube, cube) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function cube_ne(cube, cube) is 'different';

alter function cube_ne(cube, cube) owner to postgres;

create function cube_lt(cube, cube) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function cube_lt(cube, cube) is 'lower than';

alter function cube_lt(cube, cube) owner to postgres;

create function cube_gt(cube, cube) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function cube_gt(cube, cube) is 'greater than';

alter function cube_gt(cube, cube) owner to postgres;

create function cube_le(cube, cube) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function cube_le(cube, cube) is 'lower than or equal to';

alter function cube_le(cube, cube) owner to postgres;

create function cube_ge(cube, cube) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function cube_ge(cube, cube) is 'greater than or equal to';

alter function cube_ge(cube, cube) owner to postgres;

create function cube_cmp(cube, cube) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function cube_cmp(cube, cube) is 'btree comparison function';

alter function cube_cmp(cube, cube) owner to postgres;

create function cube_contains(cube, cube) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function cube_contains(cube, cube) is 'contains';

alter function cube_contains(cube, cube) owner to postgres;

create function cube_contained(cube, cube) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function cube_contained(cube, cube) is 'contained in';

alter function cube_contained(cube, cube) owner to postgres;

create function cube_overlap(cube, cube) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

comment on function cube_overlap(cube, cube) is 'overlaps';

alter function cube_overlap(cube, cube) owner to postgres;

create function cube_union(cube, cube) returns cube
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_union(cube, cube) owner to postgres;

create function cube_inter(cube, cube) returns cube
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_inter(cube, cube) owner to postgres;

create function cube_size(cube) returns double precision
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_size(cube) owner to postgres;

create function cube_subset(cube, integer[]) returns cube
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_subset(cube, integer[]) owner to postgres;

create function cube_distance(cube, cube) returns double precision
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_distance(cube, cube) owner to postgres;

create function distance_chebyshev(cube, cube) returns double precision
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function distance_chebyshev(cube, cube) owner to postgres;

create function distance_taxicab(cube, cube) returns double precision
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function distance_taxicab(cube, cube) owner to postgres;

create function cube_dim(cube) returns integer
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_dim(cube) owner to postgres;

create function cube_ll_coord(cube, integer) returns double precision
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_ll_coord(cube, integer) owner to postgres;

create function cube_ur_coord(cube, integer) returns double precision
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_ur_coord(cube, integer) owner to postgres;

create function cube_coord(cube, integer) returns double precision
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_coord(cube, integer) owner to postgres;

create function cube_coord_llur(cube, integer) returns double precision
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_coord_llur(cube, integer) owner to postgres;

create function cube(double precision) returns cube
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube(double precision) owner to postgres;

create function cube(double precision, double precision) returns cube
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube(double precision, double precision) owner to postgres;

create function cube(cube, double precision) returns cube
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube(cube, double precision) owner to postgres;

create function cube(cube, double precision, double precision) returns cube
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube(cube, double precision, double precision) owner to postgres;

create function cube_is_point(cube) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_is_point(cube) owner to postgres;

create function cube_enlarge(cube, double precision, integer) returns cube
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cube_enlarge(cube, double precision, integer) owner to postgres;

create function g_cube_consistent(internal, cube, smallint, oid, internal) returns boolean
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_cube_consistent(internal, cube, smallint, oid, internal) owner to postgres;

create function g_cube_penalty(internal, internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_cube_penalty(internal, internal, internal) owner to postgres;

create function g_cube_picksplit(internal, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_cube_picksplit(internal, internal) owner to postgres;

create function g_cube_union(internal, internal) returns cube
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_cube_union(internal, internal) owner to postgres;

create function g_cube_same(cube, cube, internal) returns internal
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_cube_same(cube, cube, internal) owner to postgres;

create function g_cube_distance(internal, cube, smallint, oid, internal) returns double precision
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function g_cube_distance(internal, cube, smallint, oid, internal) owner to postgres;

create function earth() returns double precision
    immutable
    parallel safe
    language sql
as
$$SELECT '6378168'::float8$$;

alter function earth() owner to postgres;

create function sec_to_gc(double precision) returns double precision
    immutable
    strict
    parallel safe
    language sql
as
$$SELECT CASE WHEN $1 < 0 THEN 0::float8 WHEN $1/(2*earth()) > 1 THEN pi()*earth() ELSE 2*earth()*asin($1/(2*earth())) END$$;

alter function sec_to_gc(double precision) owner to postgres;

create function gc_to_sec(double precision) returns double precision
    immutable
    strict
    parallel safe
    language sql
as
$$SELECT CASE WHEN $1 < 0 THEN 0::float8 WHEN $1/earth() > pi() THEN 2*earth() ELSE 2*earth()*sin($1/(2*earth())) END$$;

alter function gc_to_sec(double precision) owner to postgres;

create function ll_to_earth(double precision, double precision) returns earth
    immutable
    strict
    parallel safe
    language sql
as
$$SELECT cube(cube(cube(earth()*cos(radians($1))*cos(radians($2))),earth()*cos(radians($1))*sin(radians($2))),earth()*sin(radians($1)))::earth$$;

alter function ll_to_earth(double precision, double precision) owner to postgres;

create function latitude(earth) returns double precision
    immutable
    strict
    parallel safe
    language sql
as
$$SELECT CASE WHEN cube_ll_coord($1, 3)/earth() < -1 THEN -90::float8 WHEN cube_ll_coord($1, 3)/earth() > 1 THEN 90::float8 ELSE degrees(asin(cube_ll_coord($1, 3)/earth())) END$$;

alter function latitude(earth) owner to postgres;

create function longitude(earth) returns double precision
    immutable
    strict
    parallel safe
    language sql
as
$$SELECT degrees(atan2(cube_ll_coord($1, 2), cube_ll_coord($1, 1)))$$;

alter function longitude(earth) owner to postgres;

create function earth_distance(earth, earth) returns double precision
    immutable
    strict
    parallel safe
    language sql
as
$$SELECT sec_to_gc(cube_distance($1, $2))$$;

alter function earth_distance(earth, earth) owner to postgres;

create function earth_box(earth, double precision) returns cube
    immutable
    strict
    parallel safe
    language sql
as
$$SELECT cube_enlarge($1, gc_to_sec($2), 3)$$;

alter function earth_box(earth, double precision) owner to postgres;

create function geo_distance(point, point) returns double precision
    immutable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function geo_distance(point, point) owner to postgres;

create function gbtreekey4_in(cstring) returns gbtreekey4
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbtreekey4_in(cstring) owner to postgres;

create function gbtreekey4_out(gbtreekey4) returns cstring
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbtreekey4_out(gbtreekey4) owner to postgres;

create function gbtreekey8_in(cstring) returns gbtreekey8
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbtreekey8_in(cstring) owner to postgres;

create function gbtreekey8_out(gbtreekey8) returns cstring
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbtreekey8_out(gbtreekey8) owner to postgres;

create function gbtreekey16_in(cstring) returns gbtreekey16
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbtreekey16_in(cstring) owner to postgres;

create function gbtreekey16_out(gbtreekey16) returns cstring
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbtreekey16_out(gbtreekey16) owner to postgres;

create function gbtreekey32_in(cstring) returns gbtreekey32
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbtreekey32_in(cstring) owner to postgres;

create function gbtreekey32_out(gbtreekey32) returns cstring
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbtreekey32_out(gbtreekey32) owner to postgres;

create function gbtreekey_var_in(cstring) returns gbtreekey_var
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbtreekey_var_in(cstring) owner to postgres;

create function gbtreekey_var_out(gbtreekey_var) returns cstring
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbtreekey_var_out(gbtreekey_var) owner to postgres;

create function cash_dist(money, money) returns money
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function cash_dist(money, money) owner to postgres;

create function date_dist(date, date) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function date_dist(date, date) owner to postgres;

create function float4_dist(real, real) returns real
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function float4_dist(real, real) owner to postgres;

create function float8_dist(double precision, double precision) returns double precision
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function float8_dist(double precision, double precision) owner to postgres;

create function int2_dist(smallint, smallint) returns smallint
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function int2_dist(smallint, smallint) owner to postgres;

create function int4_dist(integer, integer) returns integer
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function int4_dist(integer, integer) owner to postgres;

create function int8_dist(bigint, bigint) returns bigint
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function int8_dist(bigint, bigint) owner to postgres;

create function interval_dist(interval, interval) returns interval
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function interval_dist(interval, interval) owner to postgres;

create function oid_dist(oid, oid) returns oid
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function oid_dist(oid, oid) owner to postgres;

create function time_dist(time, time) returns interval
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function time_dist(time, time) owner to postgres;

create function ts_dist(timestamp, timestamp) returns interval
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function ts_dist(timestamp, timestamp) owner to postgres;

create function tstz_dist(timestamp with time zone, timestamp with time zone) returns interval
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function tstz_dist(timestamp with time zone, timestamp with time zone) owner to postgres;

create function gbt_oid_consistent(internal, oid, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_oid_consistent(internal, oid, smallint, oid, internal) owner to postgres;

create function gbt_oid_distance(internal, oid, smallint, oid, internal) returns double precision
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_oid_distance(internal, oid, smallint, oid, internal) owner to postgres;

create function gbt_oid_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_oid_fetch(internal) owner to postgres;

create function gbt_oid_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_oid_compress(internal) owner to postgres;

create function gbt_decompress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_decompress(internal) owner to postgres;

create function gbt_var_decompress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_var_decompress(internal) owner to postgres;

create function gbt_var_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_var_fetch(internal) owner to postgres;

create function gbt_oid_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_oid_penalty(internal, internal, internal) owner to postgres;

create function gbt_oid_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_oid_picksplit(internal, internal) owner to postgres;

create function gbt_oid_union(internal, internal) returns gbtreekey8
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_oid_union(internal, internal) owner to postgres;

create function gbt_oid_same(gbtreekey8, gbtreekey8, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_oid_same(gbtreekey8, gbtreekey8, internal) owner to postgres;

create function gbt_int2_consistent(internal, smallint, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int2_consistent(internal, smallint, smallint, oid, internal) owner to postgres;

create function gbt_int2_distance(internal, smallint, smallint, oid, internal) returns double precision
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int2_distance(internal, smallint, smallint, oid, internal) owner to postgres;

create function gbt_int2_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int2_compress(internal) owner to postgres;

create function gbt_int2_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int2_fetch(internal) owner to postgres;

create function gbt_int2_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int2_penalty(internal, internal, internal) owner to postgres;

create function gbt_int2_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int2_picksplit(internal, internal) owner to postgres;

create function gbt_int2_union(internal, internal) returns gbtreekey4
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int2_union(internal, internal) owner to postgres;

create function gbt_int2_same(gbtreekey4, gbtreekey4, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int2_same(gbtreekey4, gbtreekey4, internal) owner to postgres;

create function gbt_int4_consistent(internal, integer, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int4_consistent(internal, integer, smallint, oid, internal) owner to postgres;

create function gbt_int4_distance(internal, integer, smallint, oid, internal) returns double precision
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int4_distance(internal, integer, smallint, oid, internal) owner to postgres;

create function gbt_int4_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int4_compress(internal) owner to postgres;

create function gbt_int4_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int4_fetch(internal) owner to postgres;

create function gbt_int4_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int4_penalty(internal, internal, internal) owner to postgres;

create function gbt_int4_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int4_picksplit(internal, internal) owner to postgres;

create function gbt_int4_union(internal, internal) returns gbtreekey8
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int4_union(internal, internal) owner to postgres;

create function gbt_int4_same(gbtreekey8, gbtreekey8, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int4_same(gbtreekey8, gbtreekey8, internal) owner to postgres;

create function gbt_int8_consistent(internal, bigint, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int8_consistent(internal, bigint, smallint, oid, internal) owner to postgres;

create function gbt_int8_distance(internal, bigint, smallint, oid, internal) returns double precision
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int8_distance(internal, bigint, smallint, oid, internal) owner to postgres;

create function gbt_int8_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int8_compress(internal) owner to postgres;

create function gbt_int8_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int8_fetch(internal) owner to postgres;

create function gbt_int8_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int8_penalty(internal, internal, internal) owner to postgres;

create function gbt_int8_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int8_picksplit(internal, internal) owner to postgres;

create function gbt_int8_union(internal, internal) returns gbtreekey16
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int8_union(internal, internal) owner to postgres;

create function gbt_int8_same(gbtreekey16, gbtreekey16, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_int8_same(gbtreekey16, gbtreekey16, internal) owner to postgres;

create function gbt_float4_consistent(internal, real, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float4_consistent(internal, real, smallint, oid, internal) owner to postgres;

create function gbt_float4_distance(internal, real, smallint, oid, internal) returns double precision
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float4_distance(internal, real, smallint, oid, internal) owner to postgres;

create function gbt_float4_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float4_compress(internal) owner to postgres;

create function gbt_float4_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float4_fetch(internal) owner to postgres;

create function gbt_float4_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float4_penalty(internal, internal, internal) owner to postgres;

create function gbt_float4_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float4_picksplit(internal, internal) owner to postgres;

create function gbt_float4_union(internal, internal) returns gbtreekey8
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float4_union(internal, internal) owner to postgres;

create function gbt_float4_same(gbtreekey8, gbtreekey8, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float4_same(gbtreekey8, gbtreekey8, internal) owner to postgres;

create function gbt_float8_consistent(internal, double precision, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float8_consistent(internal, double precision, smallint, oid, internal) owner to postgres;

create function gbt_float8_distance(internal, double precision, smallint, oid, internal) returns double precision
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float8_distance(internal, double precision, smallint, oid, internal) owner to postgres;

create function gbt_float8_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float8_compress(internal) owner to postgres;

create function gbt_float8_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float8_fetch(internal) owner to postgres;

create function gbt_float8_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float8_penalty(internal, internal, internal) owner to postgres;

create function gbt_float8_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float8_picksplit(internal, internal) owner to postgres;

create function gbt_float8_union(internal, internal) returns gbtreekey16
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float8_union(internal, internal) owner to postgres;

create function gbt_float8_same(gbtreekey16, gbtreekey16, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_float8_same(gbtreekey16, gbtreekey16, internal) owner to postgres;

create function gbt_ts_consistent(internal, timestamp, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_ts_consistent(internal, timestamp, smallint, oid, internal) owner to postgres;

create function gbt_ts_distance(internal, timestamp, smallint, oid, internal) returns double precision
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_ts_distance(internal, timestamp, smallint, oid, internal) owner to postgres;

create function gbt_tstz_consistent(internal, timestamp with time zone, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_tstz_consistent(internal, timestamp with time zone, smallint, oid, internal) owner to postgres;

create function gbt_tstz_distance(internal, timestamp with time zone, smallint, oid, internal) returns double precision
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_tstz_distance(internal, timestamp with time zone, smallint, oid, internal) owner to postgres;

create function gbt_ts_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_ts_compress(internal) owner to postgres;

create function gbt_tstz_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_tstz_compress(internal) owner to postgres;

create function gbt_ts_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_ts_fetch(internal) owner to postgres;

create function gbt_ts_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_ts_penalty(internal, internal, internal) owner to postgres;

create function gbt_ts_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_ts_picksplit(internal, internal) owner to postgres;

create function gbt_ts_union(internal, internal) returns gbtreekey16
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_ts_union(internal, internal) owner to postgres;

create function gbt_ts_same(gbtreekey16, gbtreekey16, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_ts_same(gbtreekey16, gbtreekey16, internal) owner to postgres;

create function gbt_time_consistent(internal, time, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_time_consistent(internal, time, smallint, oid, internal) owner to postgres;

create function gbt_time_distance(internal, time, smallint, oid, internal) returns double precision
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_time_distance(internal, time, smallint, oid, internal) owner to postgres;

create function gbt_timetz_consistent(internal, time with time zone, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_timetz_consistent(internal, time with time zone, smallint, oid, internal) owner to postgres;

create function gbt_time_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_time_compress(internal) owner to postgres;

create function gbt_timetz_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_timetz_compress(internal) owner to postgres;

create function gbt_time_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_time_fetch(internal) owner to postgres;

create function gbt_time_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_time_penalty(internal, internal, internal) owner to postgres;

create function gbt_time_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_time_picksplit(internal, internal) owner to postgres;

create function gbt_time_union(internal, internal) returns gbtreekey16
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_time_union(internal, internal) owner to postgres;

create function gbt_time_same(gbtreekey16, gbtreekey16, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_time_same(gbtreekey16, gbtreekey16, internal) owner to postgres;

create function gbt_date_consistent(internal, date, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_date_consistent(internal, date, smallint, oid, internal) owner to postgres;

create function gbt_date_distance(internal, date, smallint, oid, internal) returns double precision
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_date_distance(internal, date, smallint, oid, internal) owner to postgres;

create function gbt_date_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_date_compress(internal) owner to postgres;

create function gbt_date_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_date_fetch(internal) owner to postgres;

create function gbt_date_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_date_penalty(internal, internal, internal) owner to postgres;

create function gbt_date_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_date_picksplit(internal, internal) owner to postgres;

create function gbt_date_union(internal, internal) returns gbtreekey8
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_date_union(internal, internal) owner to postgres;

create function gbt_date_same(gbtreekey8, gbtreekey8, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_date_same(gbtreekey8, gbtreekey8, internal) owner to postgres;

create function gbt_intv_consistent(internal, interval, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_intv_consistent(internal, interval, smallint, oid, internal) owner to postgres;

create function gbt_intv_distance(internal, interval, smallint, oid, internal) returns double precision
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_intv_distance(internal, interval, smallint, oid, internal) owner to postgres;

create function gbt_intv_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_intv_compress(internal) owner to postgres;

create function gbt_intv_decompress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_intv_decompress(internal) owner to postgres;

create function gbt_intv_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_intv_fetch(internal) owner to postgres;

create function gbt_intv_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_intv_penalty(internal, internal, internal) owner to postgres;

create function gbt_intv_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_intv_picksplit(internal, internal) owner to postgres;

create function gbt_intv_union(internal, internal) returns gbtreekey32
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_intv_union(internal, internal) owner to postgres;

create function gbt_intv_same(gbtreekey32, gbtreekey32, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_intv_same(gbtreekey32, gbtreekey32, internal) owner to postgres;

create function gbt_cash_consistent(internal, money, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_cash_consistent(internal, money, smallint, oid, internal) owner to postgres;

create function gbt_cash_distance(internal, money, smallint, oid, internal) returns double precision
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_cash_distance(internal, money, smallint, oid, internal) owner to postgres;

create function gbt_cash_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_cash_compress(internal) owner to postgres;

create function gbt_cash_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_cash_fetch(internal) owner to postgres;

create function gbt_cash_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_cash_penalty(internal, internal, internal) owner to postgres;

create function gbt_cash_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_cash_picksplit(internal, internal) owner to postgres;

create function gbt_cash_union(internal, internal) returns gbtreekey16
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_cash_union(internal, internal) owner to postgres;

create function gbt_cash_same(gbtreekey16, gbtreekey16, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_cash_same(gbtreekey16, gbtreekey16, internal) owner to postgres;

create function gbt_macad_consistent(internal, macaddr, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad_consistent(internal, macaddr, smallint, oid, internal) owner to postgres;

create function gbt_macad_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad_compress(internal) owner to postgres;

create function gbt_macad_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad_fetch(internal) owner to postgres;

create function gbt_macad_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad_penalty(internal, internal, internal) owner to postgres;

create function gbt_macad_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad_picksplit(internal, internal) owner to postgres;

create function gbt_macad_union(internal, internal) returns gbtreekey16
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad_union(internal, internal) owner to postgres;

create function gbt_macad_same(gbtreekey16, gbtreekey16, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad_same(gbtreekey16, gbtreekey16, internal) owner to postgres;

create function gbt_text_consistent(internal, text, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_text_consistent(internal, text, smallint, oid, internal) owner to postgres;

create function gbt_bpchar_consistent(internal, char, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bpchar_consistent(internal, char, smallint, oid, internal) owner to postgres;

create function gbt_text_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_text_compress(internal) owner to postgres;

create function gbt_bpchar_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bpchar_compress(internal) owner to postgres;

create function gbt_text_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_text_penalty(internal, internal, internal) owner to postgres;

create function gbt_text_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_text_picksplit(internal, internal) owner to postgres;

create function gbt_text_union(internal, internal) returns gbtreekey_var
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_text_union(internal, internal) owner to postgres;

create function gbt_text_same(gbtreekey_var, gbtreekey_var, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_text_same(gbtreekey_var, gbtreekey_var, internal) owner to postgres;

create function gbt_bytea_consistent(internal, bytea, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bytea_consistent(internal, bytea, smallint, oid, internal) owner to postgres;

create function gbt_bytea_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bytea_compress(internal) owner to postgres;

create function gbt_bytea_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bytea_penalty(internal, internal, internal) owner to postgres;

create function gbt_bytea_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bytea_picksplit(internal, internal) owner to postgres;

create function gbt_bytea_union(internal, internal) returns gbtreekey_var
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bytea_union(internal, internal) owner to postgres;

create function gbt_bytea_same(gbtreekey_var, gbtreekey_var, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bytea_same(gbtreekey_var, gbtreekey_var, internal) owner to postgres;

create function gbt_numeric_consistent(internal, numeric, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_numeric_consistent(internal, numeric, smallint, oid, internal) owner to postgres;

create function gbt_numeric_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_numeric_compress(internal) owner to postgres;

create function gbt_numeric_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_numeric_penalty(internal, internal, internal) owner to postgres;

create function gbt_numeric_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_numeric_picksplit(internal, internal) owner to postgres;

create function gbt_numeric_union(internal, internal) returns gbtreekey_var
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_numeric_union(internal, internal) owner to postgres;

create function gbt_numeric_same(gbtreekey_var, gbtreekey_var, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_numeric_same(gbtreekey_var, gbtreekey_var, internal) owner to postgres;

create function gbt_bit_consistent(internal, bit, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bit_consistent(internal, bit, smallint, oid, internal) owner to postgres;

create function gbt_bit_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bit_compress(internal) owner to postgres;

create function gbt_bit_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bit_penalty(internal, internal, internal) owner to postgres;

create function gbt_bit_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bit_picksplit(internal, internal) owner to postgres;

create function gbt_bit_union(internal, internal) returns gbtreekey_var
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bit_union(internal, internal) owner to postgres;

create function gbt_bit_same(gbtreekey_var, gbtreekey_var, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_bit_same(gbtreekey_var, gbtreekey_var, internal) owner to postgres;

create function gbt_inet_consistent(internal, inet, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_inet_consistent(internal, inet, smallint, oid, internal) owner to postgres;

create function gbt_inet_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_inet_compress(internal) owner to postgres;

create function gbt_inet_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_inet_penalty(internal, internal, internal) owner to postgres;

create function gbt_inet_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_inet_picksplit(internal, internal) owner to postgres;

create function gbt_inet_union(internal, internal) returns gbtreekey16
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_inet_union(internal, internal) owner to postgres;

create function gbt_inet_same(gbtreekey16, gbtreekey16, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_inet_same(gbtreekey16, gbtreekey16, internal) owner to postgres;

create function gbt_uuid_consistent(internal, uuid, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_uuid_consistent(internal, uuid, smallint, oid, internal) owner to postgres;

create function gbt_uuid_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_uuid_fetch(internal) owner to postgres;

create function gbt_uuid_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_uuid_compress(internal) owner to postgres;

create function gbt_uuid_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_uuid_penalty(internal, internal, internal) owner to postgres;

create function gbt_uuid_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_uuid_picksplit(internal, internal) owner to postgres;

create function gbt_uuid_union(internal, internal) returns gbtreekey32
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_uuid_union(internal, internal) owner to postgres;

create function gbt_uuid_same(gbtreekey32, gbtreekey32, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_uuid_same(gbtreekey32, gbtreekey32, internal) owner to postgres;

create function gbt_macad8_consistent(internal, macaddr8, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad8_consistent(internal, macaddr8, smallint, oid, internal) owner to postgres;

create function gbt_macad8_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad8_compress(internal) owner to postgres;

create function gbt_macad8_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad8_fetch(internal) owner to postgres;

create function gbt_macad8_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad8_penalty(internal, internal, internal) owner to postgres;

create function gbt_macad8_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad8_picksplit(internal, internal) owner to postgres;

create function gbt_macad8_union(internal, internal) returns gbtreekey16
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad8_union(internal, internal) owner to postgres;

create function gbt_macad8_same(gbtreekey16, gbtreekey16, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_macad8_same(gbtreekey16, gbtreekey16, internal) owner to postgres;

create function gbt_enum_consistent(internal, anyenum, smallint, oid, internal) returns boolean
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_enum_consistent(internal, anyenum, smallint, oid, internal) owner to postgres;

create function gbt_enum_compress(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_enum_compress(internal) owner to postgres;

create function gbt_enum_fetch(internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_enum_fetch(internal) owner to postgres;

create function gbt_enum_penalty(internal, internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_enum_penalty(internal, internal, internal) owner to postgres;

create function gbt_enum_picksplit(internal, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_enum_picksplit(internal, internal) owner to postgres;

create function gbt_enum_union(internal, internal) returns gbtreekey8
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_enum_union(internal, internal) owner to postgres;

create function gbt_enum_same(gbtreekey8, gbtreekey8, internal) returns internal
    immutable
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function gbt_enum_same(gbtreekey8, gbtreekey8, internal) owner to postgres;

create function dxsyn_init(internal) returns internal
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dxsyn_init(internal) owner to postgres;

create function dxsyn_lexize(internal, internal, internal, internal) returns internal
    strict
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function dxsyn_lexize(internal, internal, internal, internal) owner to postgres;

create function unaccent(regdictionary, text) returns text
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function unaccent(regdictionary, text) owner to postgres;

create function unaccent(text) returns text
    stable
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function unaccent(text) owner to postgres;

create function unaccent_init(internal) returns internal
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function unaccent_init(internal) owner to postgres;

create function unaccent_lexize(internal, internal, internal, internal) returns internal
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function unaccent_lexize(internal, internal, internal, internal) owner to postgres;

create function pg_stat_statements_reset() returns void
    parallel safe
    language c
as
$$
begin
-- missing source code
end;
$$;

alter function pg_stat_statements_reset() owner to postgres;

create function pg_stat_statements(showtext boolean, out userid oid, out dbid oid, out queryid bigint, out query text, out calls bigint, out total_time double precision, out min_time double precision, out max_time double precision, out mean_time double precision, out stddev_time double precision, out rows bigint, out shared_blks_hit bigint, out shared_blks_read bigint, out shared_blks_dirtied bigint, out shared_blks_written bigint, out local_blks_hit bigint, out local_blks_read bigint, out local_blks_dirtied bigint, out local_blks_written bigint, out temp_blks_read bigint, out temp_blks_written bigint, out blk_read_time double precision, out blk_write_time double precision) returns setof setof record
    strict
    parallel safe
    language c
as
$$
begin
-- missing source code
end;

$$;

alter function pg_stat_statements(boolean, out oid, out oid, out bigint, out text, out bigint, out double precision, out double precision, out double precision, out double precision, out double precision, out bigint, out bigint, out bigint, out bigint, out bigint, out bigint, out bigint, out bigint, out bigint, out bigint, out bigint, out double precision, out double precision) owner to postgres;

create operator || (procedure = ltree_addltree, leftarg = ltree, rightarg = ltree);

alter operator ||(ltree, ltree) owner to postgres;

create operator || (procedure = ltree_addtext, leftarg = ltree, rightarg = text);

alter operator ||(ltree, text) owner to postgres;

create operator || (procedure = ltree_textadd, leftarg = text, rightarg = ltree);

alter operator ||(text, ltree) owner to postgres;

create operator ?@> (procedure = _ltree_extract_isparent, leftarg = ltree[], rightarg = ltree);

alter operator ?@>(ltree[], ltree) owner to postgres;

create operator ?<@ (procedure = _ltree_extract_risparent, leftarg = ltree[], rightarg = ltree);

alter operator ?<@(ltree[], ltree) owner to postgres;

create operator ?~ (procedure = _ltq_extract_regex, leftarg = ltree[], rightarg = lquery);

alter operator ?~(ltree[], lquery) owner to postgres;

create operator ?@ (procedure = _ltxtq_extract_exec, leftarg = ltree[], rightarg = ltxtquery);

alter operator ?@(ltree[], ltxtquery) owner to postgres;

create operator % (procedure = similarity_op, leftarg = text, rightarg = text, commutator = %, join = contjoinsel, restrict = contsel);

alter operator %(text, text) owner to postgres;

create operator <-> (procedure = similarity_dist, leftarg = text, rightarg = text, commutator = <->);

alter operator <->(text, text) owner to postgres;

create operator && (procedure = _int_overlap, leftarg = integer[], rightarg = integer[], commutator = &&, join = _int_overlap_joinsel, restrict = _int_overlap_sel);

alter operator &&(integer[], integer[]) owner to postgres;

create operator # (procedure = icount, rightarg = integer[]);

alter operator #(none, integer[]) owner to postgres;

create operator # (procedure = idx, leftarg = integer[], rightarg = integer);

alter operator #(integer[], integer) owner to postgres;

create operator + (procedure = intarray_push_elem, leftarg = integer[], rightarg = integer);

alter operator +(integer[], integer) owner to postgres;

create operator + (procedure = intarray_push_array, leftarg = integer[], rightarg = integer[], commutator = +);

alter operator +(integer[], integer[]) owner to postgres;

create operator - (procedure = intarray_del_elem, leftarg = integer[], rightarg = integer);

alter operator -(integer[], integer) owner to postgres;

create operator | (procedure = intset_union_elem, leftarg = integer[], rightarg = integer);

alter operator |(integer[], integer) owner to postgres;

create operator | (procedure = _int_union, leftarg = integer[], rightarg = integer[], commutator = |);

alter operator |(integer[], integer[]) owner to postgres;

create operator - (procedure = intset_subtract, leftarg = integer[], rightarg = integer[]);

alter operator -(integer[], integer[]) owner to postgres;

create operator & (procedure = _int_inter, leftarg = integer[], rightarg = integer[], commutator = &);

alter operator &(integer[], integer[]) owner to postgres;

create operator -> (procedure = fetchval, leftarg = hstore, rightarg = text);

alter operator ->(hstore, text) owner to postgres;

create operator -> (procedure = slice_array, leftarg = hstore, rightarg = text[]);

alter operator ->(hstore, text[]) owner to postgres;

create operator ? (procedure = exist, leftarg = hstore, rightarg = text, join = contjoinsel, restrict = contsel);

alter operator ?(hstore, text) owner to postgres;

create operator ?| (procedure = exists_any, leftarg = hstore, rightarg = text[], join = contjoinsel, restrict = contsel);

alter operator ?|(hstore, text[]) owner to postgres;

create operator ?& (procedure = exists_all, leftarg = hstore, rightarg = text[], join = contjoinsel, restrict = contsel);

alter operator ?&(hstore, text[]) owner to postgres;

create operator - (procedure = delete, leftarg = hstore, rightarg = text);

alter operator -(hstore, text) owner to postgres;

create operator - (procedure = delete, leftarg = hstore, rightarg = text[]);

alter operator -(hstore, text[]) owner to postgres;

create operator - (procedure = delete, leftarg = hstore, rightarg = hstore);

alter operator -(hstore, hstore) owner to postgres;

create operator || (procedure = hs_concat, leftarg = hstore, rightarg = hstore);

alter operator ||(hstore, hstore) owner to postgres;

create operator %% (procedure = hstore_to_array, rightarg = hstore);

alter operator %%(none, hstore) owner to postgres;

create operator %# (procedure = hstore_to_matrix, rightarg = hstore);

alter operator %#(none, hstore) owner to postgres;

create operator #= (procedure = populate_record, leftarg = anyelement, rightarg = hstore);

alter operator #=(anyelement, hstore) owner to postgres;

create operator && (procedure = cube_overlap, leftarg = cube, rightarg = cube, commutator = &&, join = areajoinsel, restrict = areasel);

alter operator &&(cube, cube) owner to postgres;

create operator -> (procedure = cube_coord, leftarg = cube, rightarg = integer);

alter operator ->(cube, integer) owner to postgres;

create operator ~> (procedure = cube_coord_llur, leftarg = cube, rightarg = integer);

alter operator ~>(cube, integer) owner to postgres;

create operator <#> (procedure = distance_taxicab, leftarg = cube, rightarg = cube, commutator = <#>);

alter operator <#>(cube, cube) owner to postgres;

create operator <-> (procedure = cube_distance, leftarg = cube, rightarg = cube, commutator = <->);

alter operator <->(cube, cube) owner to postgres;

create operator <=> (procedure = distance_chebyshev, leftarg = cube, rightarg = cube, commutator = <=>);

alter operator <=>(cube, cube) owner to postgres;

create operator <@> (procedure = geo_distance, leftarg = point, rightarg = point, commutator = <@>);

alter operator <@>(point, point) owner to postgres;

create operator <-> (procedure = cash_dist, leftarg = money, rightarg = money, commutator = <->);

alter operator <->(money, money) owner to postgres;

create operator <-> (procedure = date_dist, leftarg = date, rightarg = date, commutator = <->);

alter operator <->(date, date) owner to postgres;

create operator <-> (procedure = float4_dist, leftarg = real, rightarg = real, commutator = <->);

alter operator <->(real, real) owner to postgres;

create operator <-> (procedure = float8_dist, leftarg = double precision, rightarg = double precision, commutator = <->);

alter operator <->(double precision, double precision) owner to postgres;

create operator <-> (procedure = int2_dist, leftarg = smallint, rightarg = smallint, commutator = <->);

alter operator <->(smallint, smallint) owner to postgres;

create operator <-> (procedure = int4_dist, leftarg = integer, rightarg = integer, commutator = <->);

alter operator <->(integer, integer) owner to postgres;

create operator <-> (procedure = int8_dist, leftarg = bigint, rightarg = bigint, commutator = <->);

alter operator <->(bigint, bigint) owner to postgres;

create operator <-> (procedure = interval_dist, leftarg = interval, rightarg = interval, commutator = <->);

alter operator <->(interval, interval) owner to postgres;

create operator <-> (procedure = oid_dist, leftarg = oid, rightarg = oid, commutator = <->);

alter operator <->(oid, oid) owner to postgres;

create operator <-> (procedure = time_dist, leftarg = time, rightarg = time, commutator = <->);

alter operator <->(time, time) owner to postgres;

create operator <-> (procedure = ts_dist, leftarg = timestamp, rightarg = timestamp, commutator = <->);

alter operator <->(timestamp, timestamp) owner to postgres;

create operator <-> (procedure = tstz_dist, leftarg = timestamp with time zone, rightarg = timestamp with time zone, commutator = <->);

alter operator <->(timestamp with time zone, timestamp with time zone) owner to postgres;

create operator family ltree_ops using btree;

alter operator family ltree_ops using btree add
    operator 1 <(ltree, ltree),
    operator 2 <=(ltree, ltree),
    operator 3 =(ltree, ltree),
    operator 4 >=(ltree, ltree),
    operator 5 >(ltree, ltree),
    function 1(ltree, ltree) ltree_cmp(ltree, ltree);

alter operator family ltree_ops using btree owner to postgres;

create operator class ltree_ops default for type ltree using btree as
    operator 3 =(ltree, ltree),
    operator 2 <=(ltree, ltree),
    operator 5 >(ltree, ltree),
    operator 1 <(ltree, ltree),
    operator 4 >=(ltree, ltree),
    function 1(ltree, ltree) ltree_cmp(ltree, ltree);

alter operator class ltree_ops using btree owner to postgres;

create operator family gist_ltree_ops using gist;

alter operator family gist_ltree_ops using gist add
    operator 17 ?(lquery[], ltree),
    operator 1 <(ltree, ltree),
    operator 2 <=(ltree, ltree),
    operator 3 =(ltree, ltree),
    operator 4 >=(ltree, ltree),
    operator 5 >(ltree, ltree),
    operator 10 @>(ltree, ltree),
    operator 11 <@(ltree, ltree),
    operator 12 ~(ltree, lquery),
    operator 13 ~(lquery, ltree),
    operator 14 @(ltree, ltxtquery),
    operator 15 @(ltxtquery, ltree),
    operator 16 ?(ltree, lquery[]),
    function 5(ltree, ltree) ltree_penalty(internal, internal, internal),
    function 6(ltree, ltree) ltree_picksplit(internal, internal),
    function 4(ltree, ltree) ltree_decompress(internal),
    function 3(ltree, ltree) ltree_compress(internal),
    function 1(ltree, ltree) ltree_consistent(internal, ltree, smallint, oid, internal),
    function 2(ltree, ltree) ltree_union(internal, internal),
    function 7(ltree, ltree) ltree_same(ltree_gist, ltree_gist, internal);

alter operator family gist_ltree_ops using gist owner to postgres;

create operator class gist_ltree_ops default for type ltree using gist as storage ltree_gist operator 12 ~(ltree, lquery),
	operator 13 ~(lquery, ltree),
	operator 4 >=(ltree, ltree),
	operator 5 >(ltree, ltree),
	operator 17 ?(lquery[], ltree),
	operator 10 @>(ltree, ltree),
	operator 16 ?(ltree, lquery[]),
	operator 11 <@(ltree, ltree),
	operator 15 @(ltxtquery, ltree),
	operator 14 @(ltree, ltxtquery),
	operator 1 <(ltree, ltree),
	operator 2 <=(ltree, ltree),
	operator 3 =(ltree, ltree),
	function 4(ltree, ltree) ltree_decompress(internal),
	function 7(ltree, ltree) ltree_same(ltree_gist, ltree_gist, internal),
	function 5(ltree, ltree) ltree_penalty(internal, internal, internal),
	function 6(ltree, ltree) ltree_picksplit(internal, internal),
	function 2(ltree, ltree) ltree_union(internal, internal),
	function 1(ltree, ltree) ltree_consistent(internal, ltree, smallint, oid, internal),
	function 3(ltree, ltree) ltree_compress(internal);

alter operator class gist_ltree_ops using gist owner to postgres;

create operator family gist__ltree_ops using gist;

alter operator family gist__ltree_ops using gist add
    operator 16 ?(ltree[], lquery[]),
    operator 10 <@(ltree[], ltree),
    operator 11 @>(ltree, ltree[]),
    operator 12 ~(ltree[], lquery),
    operator 13 ~(lquery, ltree[]),
    operator 14 @(ltree[], ltxtquery),
    operator 15 @(ltxtquery, ltree[]),
    operator 17 ?(lquery[], ltree[]),
    function 1(ltree[], ltree[]) _ltree_consistent(internal, ltree[], smallint, oid, internal),
    function 7(ltree[], ltree[]) _ltree_same(ltree_gist, ltree_gist, internal),
    function 5(ltree[], ltree[]) _ltree_penalty(internal, internal, internal),
    function 2(ltree[], ltree[]) _ltree_union(internal, internal),
    function 6(ltree[], ltree[]) _ltree_picksplit(internal, internal),
    function 4(ltree[], ltree[]) ltree_decompress(internal),
    function 3(ltree[], ltree[]) _ltree_compress(internal);

alter operator family gist__ltree_ops using gist owner to postgres;

create operator class gist__ltree_ops default for type ltree[] using gist as storage ltree_gist operator 15 @(ltxtquery, ltree[]),
	operator 16 ?(ltree[], lquery[]),
	operator 17 ?(lquery[], ltree[]),
	operator 14 @(ltree[], ltxtquery),
	operator 10 <@(ltree[], ltree),
	operator 13 ~(lquery, ltree[]),
	operator 11 @>(ltree, ltree[]),
	operator 12 ~(ltree[], lquery),
	function 3(ltree[], ltree[]) _ltree_compress(internal),
	function 7(ltree[], ltree[]) _ltree_same(ltree_gist, ltree_gist, internal),
	function 6(ltree[], ltree[]) _ltree_picksplit(internal, internal),
	function 5(ltree[], ltree[]) _ltree_penalty(internal, internal, internal),
	function 4(ltree[], ltree[]) ltree_decompress(internal),
	function 1(ltree[], ltree[]) _ltree_consistent(internal, ltree[], smallint, oid, internal),
	function 2(ltree[], ltree[]) _ltree_union(internal, internal);

alter operator class gist__ltree_ops using gist owner to postgres;

create operator family citext_ops using btree;

alter operator family citext_ops using btree add
    operator 5 >(citext, citext),
    operator 1 <(citext, citext),
    operator 2 <=(citext, citext),
    operator 3 =(citext, citext),
    operator 4 >=(citext, citext),
    function 1(citext, citext) citext_cmp(citext, citext);

alter operator family citext_ops using btree owner to postgres;

create operator class citext_ops default for type citext using btree as
    operator 4 >=(citext, citext),
    operator 5 >(citext, citext),
    operator 1 <(citext, citext),
    operator 2 <=(citext, citext),
    operator 3 =(citext, citext),
    function 1(citext, citext) citext_cmp(citext, citext);

alter operator class citext_ops using btree owner to postgres;

create operator family citext_ops using hash;

alter operator family citext_ops using hash add
    operator 1 =(citext, citext),
    function 1(citext, citext) citext_hash(citext);

alter operator family citext_ops using hash owner to postgres;

create operator class citext_ops default for type citext using hash as
    operator 1 =(citext, citext),
    function 1(citext, citext) citext_hash(citext);

alter operator class citext_ops using hash owner to postgres;

create operator family citext_pattern_ops using btree;

alter operator family citext_pattern_ops using btree add
    operator 1 ~<~(citext, citext),
    operator 2 ~<=~(citext, citext),
    operator 3 =(citext, citext),
    operator 4 ~>=~(citext, citext),
    operator 5 ~>~(citext, citext),
    function 1(citext, citext) citext_pattern_cmp(citext, citext);

alter operator family citext_pattern_ops using btree owner to postgres;

create operator class citext_pattern_ops for type citext using btree as
    operator 3 =(citext, citext),
    operator 5 ~>~(citext, citext),
    operator 1 ~<~(citext, citext),
    operator 2 ~<=~(citext, citext),
    operator 4 ~>=~(citext, citext),
    function 1(citext, citext) citext_pattern_cmp(citext, citext);

alter operator class citext_pattern_ops using btree owner to postgres;

create operator family gist_trgm_ops using gist;

alter operator family gist_trgm_ops using gist add
    operator 3 ~~(text,text),
    operator 4 ~~*(text,text),
    operator 5 ~(text,text),
    operator 6 ~*(text,text),
    operator 9 %>>(text, text),
    operator 7 %>(text, text),
    operator 10 <->>>(text, text) for order by float_ops,
    operator 8 <->>(text, text) for order by float_ops,
    operator 1 %(text, text),
    operator 2 <->(text, text) for order by float_ops,
    function 1(text, text) gtrgm_consistent(internal, text, smallint, oid, internal),
    function 4(text, text) gtrgm_decompress(internal),
    function 3(text, text) gtrgm_compress(internal),
    function 2(text, text) gtrgm_union(internal, internal),
    function 6(text, text) gtrgm_picksplit(internal, internal),
    function 5(text, text) gtrgm_penalty(internal, internal, internal),
    function 8(text, text) gtrgm_distance(internal, text, smallint, oid, internal),
    function 7(text, text) gtrgm_same(gtrgm, gtrgm, internal);

alter operator family gist_trgm_ops using gist owner to postgres;

create operator class gist_trgm_ops for type text using gist as storage gtrgm operator 1 %(text, text),
	function 2(text, text) gtrgm_union(internal, internal),
	function 5(text, text) gtrgm_penalty(internal, internal, internal),
	function 6(text, text) gtrgm_picksplit(internal, internal),
	function 1(text, text) gtrgm_consistent(internal, text, smallint, oid, internal),
	function 7(text, text) gtrgm_same(gtrgm, gtrgm, internal),
	function 4(text, text) gtrgm_decompress(internal),
	function 3(text, text) gtrgm_compress(internal);

alter operator class gist_trgm_ops using gist owner to postgres;

create operator family gin_trgm_ops using gin;

alter operator family gin_trgm_ops using gin add
    operator 1 %(text, text),
    operator 9 %>>(text, text),
    operator 3 ~~(text,text),
    operator 4 ~~*(text,text),
    operator 5 ~(text,text),
    operator 6 ~*(text,text),
    operator 7 %>(text, text),
    function 6(text, text) gin_trgm_triconsistent(internal, smallint, text, integer, internal, internal, internal),
    function 2(text, text) gin_extract_value_trgm(text, internal),
    function 4(text, text) gin_trgm_consistent(internal, smallint, text, integer, internal, internal, internal, internal),
    function 3(text, text) gin_extract_query_trgm(text, internal, smallint, internal, internal, internal, internal);

alter operator family gin_trgm_ops using gin owner to postgres;

create operator class gin_trgm_ops for type text using gin as storage integer operator 1 %(text, text),
	function 4(text, text) gin_trgm_consistent(internal, smallint, text, integer, internal, internal, internal, internal),
	function 1(text, text) btint4cmp(integer,integer),
	function 2(text, text) gin_extract_value_trgm(text, internal),
	function 3(text, text) gin_extract_query_trgm(text, internal, smallint, internal, internal, internal, internal);

alter operator class gin_trgm_ops using gin owner to postgres;

create operator family gist__int_ops using gist;

alter operator family gist__int_ops using gist add
    operator 20 @@(integer[], query_int),
    operator 14 ~(integer[], integer[]),
    operator 13 @(integer[], integer[]),
    operator 8 <@(integer[], integer[]),
    operator 7 @>(integer[], integer[]),
    operator 3 &&(integer[], integer[]),
    function 5(integer[], integer[]) g_int_penalty(internal, internal, internal),
    function 7(integer[], integer[]) g_int_same(integer[], integer[], internal),
    function 3(integer[], integer[]) g_int_compress(internal),
    function 1(integer[], integer[]) g_int_consistent(internal, integer[], smallint, oid, internal),
    function 4(integer[], integer[]) g_int_decompress(internal),
    function 6(integer[], integer[]) g_int_picksplit(internal, internal),
    function 2(integer[], integer[]) g_int_union(internal, internal);

alter operator family gist__int_ops using gist owner to postgres;

create operator class gist__int_ops default for type integer[] using gist as
    operator 13 @(integer[], integer[]),
    operator 6 =(anyarray,anyarray),
    operator 7 @>(integer[], integer[]),
    operator 20 @@(integer[], query_int),
    operator 3 &&(integer[], integer[]),
    operator 14 ~(integer[], integer[]),
    operator 8 <@(integer[], integer[]),
    function 3(integer[], integer[]) g_int_compress(internal),
    function 1(integer[], integer[]) g_int_consistent(internal, integer[], smallint, oid, internal),
    function 7(integer[], integer[]) g_int_same(integer[], integer[], internal),
    function 6(integer[], integer[]) g_int_picksplit(internal, internal),
    function 2(integer[], integer[]) g_int_union(internal, internal),
    function 5(integer[], integer[]) g_int_penalty(internal, internal, internal),
    function 4(integer[], integer[]) g_int_decompress(internal);

alter operator class gist__int_ops using gist owner to postgres;

create operator family gist__intbig_ops using gist;

alter operator family gist__intbig_ops using gist add
    operator 8 <@(integer[], integer[]),
    operator 3 &&(integer[], integer[]),
    operator 20 @@(integer[], query_int),
    operator 14 ~(integer[], integer[]),
    operator 13 @(integer[], integer[]),
    operator 7 @>(integer[], integer[]),
    function 5(integer[], integer[]) g_intbig_penalty(internal, internal, internal),
    function 1(integer[], integer[]) g_intbig_consistent(internal, integer[], smallint, oid, internal),
    function 2(integer[], integer[]) g_intbig_union(internal, internal),
    function 3(integer[], integer[]) g_intbig_compress(internal),
    function 4(integer[], integer[]) g_intbig_decompress(internal),
    function 6(integer[], integer[]) g_intbig_picksplit(internal, internal),
    function 7(integer[], integer[]) g_intbig_same(intbig_gkey, intbig_gkey, internal);

alter operator family gist__intbig_ops using gist owner to postgres;

create operator class gist__intbig_ops for type integer[] using gist as storage intbig_gkey operator 8 <@(integer[], integer[]),
	operator 14 ~(integer[], integer[]),
	operator 13 @(integer[], integer[]),
	operator 20 @@(integer[], query_int),
	operator 6 =(anyarray,anyarray),
	operator 7 @>(integer[], integer[]),
	operator 3 &&(integer[], integer[]),
	function 2(integer[], integer[]) g_intbig_union(internal, internal),
	function 7(integer[], integer[]) g_intbig_same(intbig_gkey, intbig_gkey, internal),
	function 6(integer[], integer[]) g_intbig_picksplit(internal, internal),
	function 5(integer[], integer[]) g_intbig_penalty(internal, internal, internal),
	function 4(integer[], integer[]) g_intbig_decompress(internal),
	function 3(integer[], integer[]) g_intbig_compress(internal),
	function 1(integer[], integer[]) g_intbig_consistent(internal, integer[], smallint, oid, internal);

alter operator class gist__intbig_ops using gist owner to postgres;

create operator family gin__int_ops using gin;

alter operator family gin__int_ops using gin add
    operator 20 @@(integer[], query_int),
    operator 8 <@(integer[], integer[]),
    operator 13 @(integer[], integer[]),
    operator 7 @>(integer[], integer[]),
    operator 3 &&(integer[], integer[]),
    operator 14 ~(integer[], integer[]),
    function 4(integer[], integer[]) ginint4_consistent(internal, smallint, integer[], integer, internal, internal, internal, internal),
    function 3(integer[], integer[]) ginint4_queryextract(integer[], internal, smallint, internal, internal, internal, internal);

alter operator family gin__int_ops using gin owner to postgres;

create operator class gin__int_ops for type integer[] using gin as storage integer operator 3 &&(integer[], integer[]),
	operator 8 <@(integer[], integer[]),
	operator 20 @@(integer[], query_int),
	operator 6 =(anyarray,anyarray),
	operator 14 ~(integer[], integer[]),
	operator 7 @>(integer[], integer[]),
	operator 13 @(integer[], integer[]),
	function 1(integer[], integer[]) btint4cmp(integer,integer),
	function 2(integer[], integer[]) ginarrayextract(anyarray,internal,internal),
	function 3(integer[], integer[]) ginint4_queryextract(integer[], internal, smallint, internal, internal, internal, internal),
	function 4(integer[], integer[]) ginint4_consistent(internal, smallint, integer[], integer, internal, internal, internal, internal);

alter operator class gin__int_ops using gin owner to postgres;

create operator family btree_hstore_ops using btree;

alter operator family btree_hstore_ops using btree add
    operator 3 =(hstore, hstore),
    operator 1 #<#(hstore, hstore),
    operator 2 #<=#(hstore, hstore),
    operator 5 #>#(hstore, hstore),
    operator 4 #>=#(hstore, hstore),
    function 1(hstore, hstore) hstore_cmp(hstore, hstore);

alter operator family btree_hstore_ops using btree owner to postgres;

create operator class btree_hstore_ops default for type hstore using btree as
    operator 4 #>=#(hstore, hstore),
    operator 5 #>#(hstore, hstore),
    operator 3 =(hstore, hstore),
    operator 2 #<=#(hstore, hstore),
    operator 1 #<#(hstore, hstore),
    function 1(hstore, hstore) hstore_cmp(hstore, hstore);

alter operator class btree_hstore_ops using btree owner to postgres;

create operator family hash_hstore_ops using hash;

alter operator family hash_hstore_ops using hash add
    operator 1 =(hstore, hstore),
    function 1(hstore, hstore) hstore_hash(hstore);

alter operator family hash_hstore_ops using hash owner to postgres;

create operator class hash_hstore_ops default for type hstore using hash as
    operator 1 =(hstore, hstore),
    function 1(hstore, hstore) hstore_hash(hstore);

alter operator class hash_hstore_ops using hash owner to postgres;

create operator family gist_hstore_ops using gist;

alter operator family gist_hstore_ops using gist add
    operator 7 @>(hstore, hstore),
    operator 13 @(hstore, hstore),
    operator 11 ?&(hstore, text[]),
    operator 10 ?|(hstore, text[]),
    operator 9 ?(hstore, text),
    function 2(hstore, hstore) ghstore_union(internal, internal),
    function 1(hstore, hstore) ghstore_consistent(internal, hstore, smallint, oid, internal),
    function 3(hstore, hstore) ghstore_compress(internal),
    function 4(hstore, hstore) ghstore_decompress(internal),
    function 5(hstore, hstore) ghstore_penalty(internal, internal, internal),
    function 6(hstore, hstore) ghstore_picksplit(internal, internal),
    function 7(hstore, hstore) ghstore_same(ghstore, ghstore, internal);

alter operator family gist_hstore_ops using gist owner to postgres;

create operator class gist_hstore_ops default for type hstore using gist as storage ghstore operator 7 @>(hstore, hstore),
	operator 9 ?(hstore, text),
	operator 10 ?|(hstore, text[]),
	operator 11 ?&(hstore, text[]),
	operator 13 @(hstore, hstore),
	function 6(hstore, hstore) ghstore_picksplit(internal, internal),
	function 1(hstore, hstore) ghstore_consistent(internal, hstore, smallint, oid, internal),
	function 2(hstore, hstore) ghstore_union(internal, internal),
	function 3(hstore, hstore) ghstore_compress(internal),
	function 4(hstore, hstore) ghstore_decompress(internal),
	function 7(hstore, hstore) ghstore_same(ghstore, ghstore, internal),
	function 5(hstore, hstore) ghstore_penalty(internal, internal, internal);

alter operator class gist_hstore_ops using gist owner to postgres;

create operator family gin_hstore_ops using gin;

alter operator family gin_hstore_ops using gin add
    operator 11 ?&(hstore, text[]),
    operator 10 ?|(hstore, text[]),
    operator 9 ?(hstore, text),
    operator 7 @>(hstore, hstore),
    function 2(hstore, hstore) gin_extract_hstore(hstore, internal),
    function 4(hstore, hstore) gin_consistent_hstore(internal, smallint, hstore, integer, internal, internal),
    function 3(hstore, hstore) gin_extract_hstore_query(hstore, internal, smallint, internal, internal);

alter operator family gin_hstore_ops using gin owner to postgres;

create operator class gin_hstore_ops default for type hstore using gin as storage text operator 7 @>(hstore, hstore),
	operator 9 ?(hstore, text),
	operator 10 ?|(hstore, text[]),
	operator 11 ?&(hstore, text[]),
	function 1(hstore, hstore) bttextcmp(text,text),
	function 2(hstore, hstore) gin_extract_hstore(hstore, internal),
	function 3(hstore, hstore) gin_extract_hstore_query(hstore, internal, smallint, internal, internal),
	function 4(hstore, hstore) gin_consistent_hstore(internal, smallint, hstore, integer, internal, internal);

alter operator class gin_hstore_ops using gin owner to postgres;

create operator family int2_ops using gin;

alter operator family int2_ops using gin add
    function 5(smallint, smallint) gin_compare_prefix_int2(smallint, smallint, smallint, internal),
    function 2(smallint, smallint) gin_extract_value_int2(smallint, internal),
    function 3(smallint, smallint) gin_extract_query_int2(smallint, internal, smallint, internal, internal),
    function 4(smallint, smallint) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal);

alter operator family int2_ops using gin owner to postgres;

create operator class int2_ops default for type smallint using gin as
    operator 1 <(smallint,smallint),
    operator 2 <=(smallint,smallint),
    operator 3 =(smallint,smallint),
    operator 4 >=(smallint,smallint),
    operator 5 >(smallint,smallint),
    function 5(smallint, smallint) gin_compare_prefix_int2(smallint, smallint, smallint, internal),
    function 4(smallint, smallint) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 1(smallint, smallint) btint2cmp(smallint,smallint),
    function 2(smallint, smallint) gin_extract_value_int2(smallint, internal),
    function 3(smallint, smallint) gin_extract_query_int2(smallint, internal, smallint, internal, internal);

alter operator class int2_ops using gin owner to postgres;

create operator family int4_ops using gin;

alter operator family int4_ops using gin add
    function 3(integer, integer) gin_extract_query_int4(integer, internal, smallint, internal, internal),
    function 2(integer, integer) gin_extract_value_int4(integer, internal),
    function 4(integer, integer) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 5(integer, integer) gin_compare_prefix_int4(integer, integer, smallint, internal);

alter operator family int4_ops using gin owner to postgres;

create operator class int4_ops default for type integer using gin as
    operator 1 <(integer,integer),
    operator 3 =(integer,integer),
    operator 4 >=(integer,integer),
    operator 5 >(integer,integer),
    operator 2 <=(integer,integer),
    function 3(integer, integer) gin_extract_query_int4(integer, internal, smallint, internal, internal),
    function 5(integer, integer) gin_compare_prefix_int4(integer, integer, smallint, internal),
    function 4(integer, integer) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 2(integer, integer) gin_extract_value_int4(integer, internal),
    function 1(integer, integer) btint4cmp(integer,integer);

alter operator class int4_ops using gin owner to postgres;

create operator family int8_ops using gin;

alter operator family int8_ops using gin add
    function 5(bigint, bigint) gin_compare_prefix_int8(bigint, bigint, smallint, internal),
    function 2(bigint, bigint) gin_extract_value_int8(bigint, internal),
    function 3(bigint, bigint) gin_extract_query_int8(bigint, internal, smallint, internal, internal),
    function 4(bigint, bigint) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal);

alter operator family int8_ops using gin owner to postgres;

create operator class int8_ops default for type bigint using gin as
    operator 4 >=(bigint,bigint),
    operator 3 =(bigint,bigint),
    operator 2 <=(bigint,bigint),
    operator 5 >(bigint,bigint),
    operator 1 <(bigint,bigint),
    function 4(bigint, bigint) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(bigint, bigint) gin_extract_query_int8(bigint, internal, smallint, internal, internal),
    function 2(bigint, bigint) gin_extract_value_int8(bigint, internal),
    function 5(bigint, bigint) gin_compare_prefix_int8(bigint, bigint, smallint, internal),
    function 1(bigint, bigint) btint8cmp(bigint,bigint);

alter operator class int8_ops using gin owner to postgres;

create operator family float4_ops using gin;

alter operator family float4_ops using gin add
    function 2(real, real) gin_extract_value_float4(real, internal),
    function 4(real, real) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(real, real) gin_extract_query_float4(real, internal, smallint, internal, internal),
    function 5(real, real) gin_compare_prefix_float4(real, real, smallint, internal);

alter operator family float4_ops using gin owner to postgres;

create operator class float4_ops default for type real using gin as
    operator 3 =(real,real),
    operator 2 <=(real,real),
    operator 1 <(real,real),
    operator 5 >(real,real),
    operator 4 >=(real,real),
    function 3(real, real) gin_extract_query_float4(real, internal, smallint, internal, internal),
    function 2(real, real) gin_extract_value_float4(real, internal),
    function 1(real, real) btfloat4cmp(real,real),
    function 5(real, real) gin_compare_prefix_float4(real, real, smallint, internal),
    function 4(real, real) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal);

alter operator class float4_ops using gin owner to postgres;

create operator family float8_ops using gin;

alter operator family float8_ops using gin add
    function 4(double precision, double precision) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 5(double precision, double precision) gin_compare_prefix_float8(double precision, double precision, smallint, internal),
    function 2(double precision, double precision) gin_extract_value_float8(double precision, internal),
    function 3(double precision, double precision) gin_extract_query_float8(double precision, internal, smallint, internal, internal);

alter operator family float8_ops using gin owner to postgres;

create operator class float8_ops default for type double precision using gin as
    operator 5 >(double precision,double precision),
    operator 4 >=(double precision,double precision),
    operator 3 =(double precision,double precision),
    operator 2 <=(double precision,double precision),
    operator 1 <(double precision,double precision),
    function 4(double precision, double precision) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 1(double precision, double precision) btfloat8cmp(double precision,double precision),
    function 2(double precision, double precision) gin_extract_value_float8(double precision, internal),
    function 3(double precision, double precision) gin_extract_query_float8(double precision, internal, smallint, internal, internal),
    function 5(double precision, double precision) gin_compare_prefix_float8(double precision, double precision, smallint, internal);

alter operator class float8_ops using gin owner to postgres;

create operator family money_ops using gin;

alter operator family money_ops using gin add
    function 3(money, money) gin_extract_query_money(money, internal, smallint, internal, internal),
    function 5(money, money) gin_compare_prefix_money(money, money, smallint, internal),
    function 4(money, money) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 2(money, money) gin_extract_value_money(money, internal);

alter operator family money_ops using gin owner to postgres;

create operator class money_ops default for type money using gin as
    operator 5 >(money,money),
    operator 3 =(money,money),
    operator 4 >=(money,money),
    operator 2 <=(money,money),
    operator 1 <(money,money),
    function 4(money, money) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 2(money, money) gin_extract_value_money(money, internal),
    function 5(money, money) gin_compare_prefix_money(money, money, smallint, internal),
    function 1(money, money) cash_cmp(money,money),
    function 3(money, money) gin_extract_query_money(money, internal, smallint, internal, internal);

alter operator class money_ops using gin owner to postgres;

create operator family oid_ops using gin;

alter operator family oid_ops using gin add
    function 5(oid, oid) gin_compare_prefix_oid(oid, oid, smallint, internal),
    function 4(oid, oid) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 2(oid, oid) gin_extract_value_oid(oid, internal),
    function 3(oid, oid) gin_extract_query_oid(oid, internal, smallint, internal, internal);

alter operator family oid_ops using gin owner to postgres;

create operator class oid_ops default for type oid using gin as
    operator 4 >=(oid,oid),
    operator 3 =(oid,oid),
    operator 2 <=(oid,oid),
    operator 1 <(oid,oid),
    operator 5 >(oid,oid),
    function 2(oid, oid) gin_extract_value_oid(oid, internal),
    function 3(oid, oid) gin_extract_query_oid(oid, internal, smallint, internal, internal),
    function 4(oid, oid) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 5(oid, oid) gin_compare_prefix_oid(oid, oid, smallint, internal),
    function 1(oid, oid) btoidcmp(oid,oid);

alter operator class oid_ops using gin owner to postgres;

create operator family timestamp_ops using gin;

alter operator family timestamp_ops using gin add
    function 5(timestamp without time zone, timestamp without time zone) gin_compare_prefix_timestamp(timestamp, timestamp, smallint, internal),
    function 4(timestamp without time zone, timestamp without time zone) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(timestamp without time zone, timestamp without time zone) gin_extract_query_timestamp(timestamp, internal, smallint, internal, internal),
    function 2(timestamp without time zone, timestamp without time zone) gin_extract_value_timestamp(timestamp, internal);

alter operator family timestamp_ops using gin owner to postgres;

create operator class timestamp_ops default for type timestamp without time zone using gin as
    operator 4 >=(timestamp without time zone,timestamp without time zone),
    operator 3 =(timestamp without time zone,timestamp without time zone),
    operator 1 <(timestamp without time zone,timestamp without time zone),
    operator 2 <=(timestamp without time zone,timestamp without time zone),
    operator 5 >(timestamp without time zone,timestamp without time zone),
    function 4(timestamp without time zone, timestamp without time zone) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 1(timestamp without time zone, timestamp without time zone) timestamp_cmp(timestamp without time zone,timestamp without time zone),
    function 5(timestamp without time zone, timestamp without time zone) gin_compare_prefix_timestamp(timestamp, timestamp, smallint, internal),
    function 2(timestamp without time zone, timestamp without time zone) gin_extract_value_timestamp(timestamp, internal),
    function 3(timestamp without time zone, timestamp without time zone) gin_extract_query_timestamp(timestamp, internal, smallint, internal, internal);

alter operator class timestamp_ops using gin owner to postgres;

create operator family timestamptz_ops using gin;

alter operator family timestamptz_ops using gin add
    function 5(timestamp with time zone, timestamp with time zone) gin_compare_prefix_timestamptz(timestamp with time zone, timestamp with time zone, smallint, internal),
    function 4(timestamp with time zone, timestamp with time zone) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(timestamp with time zone, timestamp with time zone) gin_extract_query_timestamptz(timestamp with time zone, internal, smallint, internal, internal),
    function 2(timestamp with time zone, timestamp with time zone) gin_extract_value_timestamptz(timestamp with time zone, internal);

alter operator family timestamptz_ops using gin owner to postgres;

create operator class timestamptz_ops default for type timestamp with time zone using gin as
    operator 2 <=(timestamp with time zone,timestamp with time zone),
    operator 3 =(timestamp with time zone,timestamp with time zone),
    operator 4 >=(timestamp with time zone,timestamp with time zone),
    operator 5 >(timestamp with time zone,timestamp with time zone),
    operator 1 <(timestamp with time zone,timestamp with time zone),
    function 4(timestamp with time zone, timestamp with time zone) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(timestamp with time zone, timestamp with time zone) gin_extract_query_timestamptz(timestamp with time zone, internal, smallint, internal, internal),
    function 2(timestamp with time zone, timestamp with time zone) gin_extract_value_timestamptz(timestamp with time zone, internal),
    function 1(timestamp with time zone, timestamp with time zone) timestamptz_cmp(timestamp with time zone,timestamp with time zone),
    function 5(timestamp with time zone, timestamp with time zone) gin_compare_prefix_timestamptz(timestamp with time zone, timestamp with time zone, smallint, internal);

alter operator class timestamptz_ops using gin owner to postgres;

create operator family time_ops using gin;

alter operator family time_ops using gin add
    function 3(time without time zone, time without time zone) gin_extract_query_time(time, internal, smallint, internal, internal),
    function 2(time without time zone, time without time zone) gin_extract_value_time(time, internal),
    function 4(time without time zone, time without time zone) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 5(time without time zone, time without time zone) gin_compare_prefix_time(time, time, smallint, internal);

alter operator family time_ops using gin owner to postgres;

create operator class time_ops default for type time without time zone using gin as
    operator 5 >(time without time zone,time without time zone),
    operator 3 =(time without time zone,time without time zone),
    operator 1 <(time without time zone,time without time zone),
    operator 4 >=(time without time zone,time without time zone),
    operator 2 <=(time without time zone,time without time zone),
    function 5(time without time zone, time without time zone) gin_compare_prefix_time(time, time, smallint, internal),
    function 3(time without time zone, time without time zone) gin_extract_query_time(time, internal, smallint, internal, internal),
    function 2(time without time zone, time without time zone) gin_extract_value_time(time, internal),
    function 1(time without time zone, time without time zone) time_cmp(time without time zone,time without time zone),
    function 4(time without time zone, time without time zone) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal);

alter operator class time_ops using gin owner to postgres;

create operator family timetz_ops using gin;

alter operator family timetz_ops using gin add
    function 2(time with time zone, time with time zone) gin_extract_value_timetz(time with time zone, internal),
    function 5(time with time zone, time with time zone) gin_compare_prefix_timetz(time with time zone, time with time zone, smallint, internal),
    function 4(time with time zone, time with time zone) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(time with time zone, time with time zone) gin_extract_query_timetz(time with time zone, internal, smallint, internal, internal);

alter operator family timetz_ops using gin owner to postgres;

create operator class timetz_ops default for type time with time zone using gin as
    operator 3 =(time with time zone,time with time zone),
    operator 1 <(time with time zone,time with time zone),
    operator 2 <=(time with time zone,time with time zone),
    operator 4 >=(time with time zone,time with time zone),
    operator 5 >(time with time zone,time with time zone),
    function 5(time with time zone, time with time zone) gin_compare_prefix_timetz(time with time zone, time with time zone, smallint, internal),
    function 1(time with time zone, time with time zone) timetz_cmp(time with time zone,time with time zone),
    function 2(time with time zone, time with time zone) gin_extract_value_timetz(time with time zone, internal),
    function 3(time with time zone, time with time zone) gin_extract_query_timetz(time with time zone, internal, smallint, internal, internal),
    function 4(time with time zone, time with time zone) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal);

alter operator class timetz_ops using gin owner to postgres;

create operator family date_ops using gin;

alter operator family date_ops using gin add
    function 4(date, date) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 2(date, date) gin_extract_value_date(date, internal),
    function 5(date, date) gin_compare_prefix_date(date, date, smallint, internal),
    function 3(date, date) gin_extract_query_date(date, internal, smallint, internal, internal);

alter operator family date_ops using gin owner to postgres;

create operator class date_ops default for type date using gin as
    operator 3 =(date,date),
    operator 1 <(date,date),
    operator 2 <=(date,date),
    operator 5 >(date,date),
    operator 4 >=(date,date),
    function 4(date, date) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 2(date, date) gin_extract_value_date(date, internal),
    function 1(date, date) date_cmp(date,date),
    function 5(date, date) gin_compare_prefix_date(date, date, smallint, internal),
    function 3(date, date) gin_extract_query_date(date, internal, smallint, internal, internal);

alter operator class date_ops using gin owner to postgres;

create operator family interval_ops using gin;

alter operator family interval_ops using gin add
    function 5(interval, interval) gin_compare_prefix_interval(interval, interval, smallint, internal),
    function 4(interval, interval) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(interval, interval) gin_extract_query_interval(interval, internal, smallint, internal, internal),
    function 2(interval, interval) gin_extract_value_interval(interval, internal);

alter operator family interval_ops using gin owner to postgres;

create operator class interval_ops default for type interval using gin as
    operator 3 =(interval,interval),
    operator 5 >(interval,interval),
    operator 4 >=(interval,interval),
    operator 1 <(interval,interval),
    operator 2 <=(interval,interval),
    function 1(interval, interval) interval_cmp(interval,interval),
    function 3(interval, interval) gin_extract_query_interval(interval, internal, smallint, internal, internal),
    function 5(interval, interval) gin_compare_prefix_interval(interval, interval, smallint, internal),
    function 4(interval, interval) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 2(interval, interval) gin_extract_value_interval(interval, internal);

alter operator class interval_ops using gin owner to postgres;

create operator family macaddr_ops using gin;

alter operator family macaddr_ops using gin add
    function 4(macaddr, macaddr) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 5(macaddr, macaddr) gin_compare_prefix_macaddr(macaddr, macaddr, smallint, internal),
    function 3(macaddr, macaddr) gin_extract_query_macaddr(macaddr, internal, smallint, internal, internal),
    function 2(macaddr, macaddr) gin_extract_value_macaddr(macaddr, internal);

alter operator family macaddr_ops using gin owner to postgres;

create operator class macaddr_ops default for type macaddr using gin as
    operator 3 =(macaddr,macaddr),
    operator 1 <(macaddr,macaddr),
    operator 2 <=(macaddr,macaddr),
    operator 4 >=(macaddr,macaddr),
    operator 5 >(macaddr,macaddr),
    function 5(macaddr, macaddr) gin_compare_prefix_macaddr(macaddr, macaddr, smallint, internal),
    function 4(macaddr, macaddr) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(macaddr, macaddr) gin_extract_query_macaddr(macaddr, internal, smallint, internal, internal),
    function 1(macaddr, macaddr) macaddr_cmp(macaddr,macaddr),
    function 2(macaddr, macaddr) gin_extract_value_macaddr(macaddr, internal);

alter operator class macaddr_ops using gin owner to postgres;

create operator family inet_ops using gin;

alter operator family inet_ops using gin add
    function 4(inet, inet) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 2(inet, inet) gin_extract_value_inet(inet, internal),
    function 3(inet, inet) gin_extract_query_inet(inet, internal, smallint, internal, internal),
    function 5(inet, inet) gin_compare_prefix_inet(inet, inet, smallint, internal);

alter operator family inet_ops using gin owner to postgres;

create operator class inet_ops default for type inet using gin as
    operator 1 <(inet,inet),
    operator 5 >(inet,inet),
    operator 4 >=(inet,inet),
    operator 2 <=(inet,inet),
    operator 3 =(inet,inet),
    function 5(inet, inet) gin_compare_prefix_inet(inet, inet, smallint, internal),
    function 2(inet, inet) gin_extract_value_inet(inet, internal),
    function 3(inet, inet) gin_extract_query_inet(inet, internal, smallint, internal, internal),
    function 4(inet, inet) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 1(inet, inet) network_cmp(inet,inet);

alter operator class inet_ops using gin owner to postgres;

create operator family cidr_ops using gin;

alter operator family cidr_ops using gin add
    function 4(cidr, cidr) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(cidr, cidr) gin_extract_query_cidr(cidr, internal, smallint, internal, internal),
    function 5(cidr, cidr) gin_compare_prefix_cidr(cidr, cidr, smallint, internal),
    function 2(cidr, cidr) gin_extract_value_cidr(cidr, internal);

alter operator family cidr_ops using gin owner to postgres;

create operator class cidr_ops default for type cidr using gin as
    operator 4 >=(inet,inet),
    operator 2 <=(inet,inet),
    operator 3 =(inet,inet),
    operator 5 >(inet,inet),
    operator 1 <(inet,inet),
    function 5(cidr, cidr) gin_compare_prefix_cidr(cidr, cidr, smallint, internal),
    function 4(cidr, cidr) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(cidr, cidr) gin_extract_query_cidr(cidr, internal, smallint, internal, internal),
    function 2(cidr, cidr) gin_extract_value_cidr(cidr, internal),
    function 1(cidr, cidr) network_cmp(inet,inet);

alter operator class cidr_ops using gin owner to postgres;

create operator family text_ops using gin;

alter operator family text_ops using gin add
    function 4(text, text) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(text, text) gin_extract_query_text(text, internal, smallint, internal, internal),
    function 2(text, text) gin_extract_value_text(text, internal),
    function 5(text, text) gin_compare_prefix_text(text, text, smallint, internal);

alter operator family text_ops using gin owner to postgres;

create operator class text_ops default for type text using gin as
    operator 3 =(text,text),
    operator 5 >(text,text),
    operator 4 >=(text,text),
    operator 2 <=(text,text),
    operator 1 <(text,text),
    function 1(text, text) bttextcmp(text,text),
    function 3(text, text) gin_extract_query_text(text, internal, smallint, internal, internal),
    function 4(text, text) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 5(text, text) gin_compare_prefix_text(text, text, smallint, internal),
    function 2(text, text) gin_extract_value_text(text, internal);

alter operator class text_ops using gin owner to postgres;

create operator family varchar_ops using gin;

alter operator family varchar_ops using gin add
    function 5(character varying, character varying) gin_compare_prefix_text(text, text, smallint, internal),
    function 3(character varying, character varying) gin_extract_query_text(text, internal, smallint, internal, internal),
    function 2(character varying, character varying) gin_extract_value_text(text, internal),
    function 4(character varying, character varying) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal);

alter operator family varchar_ops using gin owner to postgres;

create operator class varchar_ops default for type character varying using gin as
    operator 5 >(text,text),
    operator 2 <=(text,text),
    operator 1 <(text,text),
    operator 4 >=(text,text),
    operator 3 =(text,text),
    function 2(character varying, character varying) gin_extract_value_text(text, internal),
    function 3(character varying, character varying) gin_extract_query_text(text, internal, smallint, internal, internal),
    function 4(character varying, character varying) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 1(character varying, character varying) bttextcmp(text,text),
    function 5(character varying, character varying) gin_compare_prefix_text(text, text, smallint, internal);

alter operator class varchar_ops using gin owner to postgres;

create operator family char_ops using gin;

alter operator family char_ops using gin add
    function 2("char", "char") gin_extract_value_char("char", internal),
    function 3("char", "char") gin_extract_query_char("char", internal, smallint, internal, internal),
    function 4("char", "char") gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 5("char", "char") gin_compare_prefix_char("char", "char", smallint, internal);

alter operator family char_ops using gin owner to postgres;

create operator class char_ops default for type "char" using gin as
    operator 3 =("char","char"),
    operator 2 <=("char","char"),
    operator 1 <("char","char"),
    operator 4 >=("char","char"),
    operator 5 >("char","char"),
    function 2("char", "char") gin_extract_value_char("char", internal),
    function 5("char", "char") gin_compare_prefix_char("char", "char", smallint, internal),
    function 1("char", "char") btcharcmp("char","char"),
    function 4("char", "char") gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3("char", "char") gin_extract_query_char("char", internal, smallint, internal, internal);

alter operator class char_ops using gin owner to postgres;

create operator family bytea_ops using gin;

alter operator family bytea_ops using gin add
    function 2(bytea, bytea) gin_extract_value_bytea(bytea, internal),
    function 3(bytea, bytea) gin_extract_query_bytea(bytea, internal, smallint, internal, internal),
    function 4(bytea, bytea) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 5(bytea, bytea) gin_compare_prefix_bytea(bytea, bytea, smallint, internal);

alter operator family bytea_ops using gin owner to postgres;

create operator class bytea_ops default for type bytea using gin as
    operator 4 >=(bytea,bytea),
    operator 1 <(bytea,bytea),
    operator 5 >(bytea,bytea),
    operator 2 <=(bytea,bytea),
    operator 3 =(bytea,bytea),
    function 1(bytea, bytea) byteacmp(bytea,bytea),
    function 2(bytea, bytea) gin_extract_value_bytea(bytea, internal),
    function 5(bytea, bytea) gin_compare_prefix_bytea(bytea, bytea, smallint, internal),
    function 3(bytea, bytea) gin_extract_query_bytea(bytea, internal, smallint, internal, internal),
    function 4(bytea, bytea) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal);

alter operator class bytea_ops using gin owner to postgres;

create operator family bit_ops using gin;

alter operator family bit_ops using gin add
    function 5(bit, bit) gin_compare_prefix_bit(bit, bit, smallint, internal),
    function 2(bit, bit) gin_extract_value_bit(bit, internal),
    function 3(bit, bit) gin_extract_query_bit(bit, internal, smallint, internal, internal),
    function 4(bit, bit) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal);

alter operator family bit_ops using gin owner to postgres;

create operator class bit_ops default for type bit using gin as
    operator 4 >=(bit,bit),
    operator 5 >(bit,bit),
    operator 3 =(bit,bit),
    operator 2 <=(bit,bit),
    operator 1 <(bit,bit),
    function 3(bit, bit) gin_extract_query_bit(bit, internal, smallint, internal, internal),
    function 5(bit, bit) gin_compare_prefix_bit(bit, bit, smallint, internal),
    function 2(bit, bit) gin_extract_value_bit(bit, internal),
    function 1(bit, bit) bitcmp(bit,bit),
    function 4(bit, bit) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal);

alter operator class bit_ops using gin owner to postgres;

create operator family varbit_ops using gin;

alter operator family varbit_ops using gin add
    function 2(bit varying, bit varying) gin_extract_value_varbit(bit varying, internal),
    function 4(bit varying, bit varying) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(bit varying, bit varying) gin_extract_query_varbit(bit varying, internal, smallint, internal, internal),
    function 5(bit varying, bit varying) gin_compare_prefix_varbit(bit varying, bit varying, smallint, internal);

alter operator family varbit_ops using gin owner to postgres;

create operator class varbit_ops default for type bit varying using gin as
    operator 1 <(bit varying,bit varying),
    operator 2 <=(bit varying,bit varying),
    operator 3 =(bit varying,bit varying),
    operator 4 >=(bit varying,bit varying),
    operator 5 >(bit varying,bit varying),
    function 3(bit varying, bit varying) gin_extract_query_varbit(bit varying, internal, smallint, internal, internal),
    function 1(bit varying, bit varying) varbitcmp(bit varying,bit varying),
    function 2(bit varying, bit varying) gin_extract_value_varbit(bit varying, internal),
    function 4(bit varying, bit varying) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 5(bit varying, bit varying) gin_compare_prefix_varbit(bit varying, bit varying, smallint, internal);

alter operator class varbit_ops using gin owner to postgres;

create operator family numeric_ops using gin;

alter operator family numeric_ops using gin add
    function 4(numeric, numeric) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(numeric, numeric) gin_extract_query_numeric(numeric, internal, smallint, internal, internal),
    function 5(numeric, numeric) gin_compare_prefix_numeric(numeric, numeric, smallint, internal),
    function 1(numeric, numeric) gin_numeric_cmp(numeric, numeric),
    function 2(numeric, numeric) gin_extract_value_numeric(numeric, internal);

alter operator family numeric_ops using gin owner to postgres;

create operator class numeric_ops default for type numeric using gin as
    operator 1 <(numeric,numeric),
    operator 2 <=(numeric,numeric),
    operator 3 =(numeric,numeric),
    operator 4 >=(numeric,numeric),
    operator 5 >(numeric,numeric),
    function 1(numeric, numeric) gin_numeric_cmp(numeric, numeric),
    function 5(numeric, numeric) gin_compare_prefix_numeric(numeric, numeric, smallint, internal),
    function 4(numeric, numeric) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(numeric, numeric) gin_extract_query_numeric(numeric, internal, smallint, internal, internal),
    function 2(numeric, numeric) gin_extract_value_numeric(numeric, internal);

alter operator class numeric_ops using gin owner to postgres;

create operator family macaddr8_ops using gin;

alter operator family macaddr8_ops using gin add
    function 2(macaddr8, macaddr8) gin_extract_value_macaddr8(macaddr8, internal),
    function 3(macaddr8, macaddr8) gin_extract_query_macaddr8(macaddr8, internal, smallint, internal, internal),
    function 5(macaddr8, macaddr8) gin_compare_prefix_macaddr8(macaddr8, macaddr8, smallint, internal),
    function 4(macaddr8, macaddr8) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal);

alter operator family macaddr8_ops using gin owner to postgres;

create operator class macaddr8_ops default for type macaddr8 using gin as
    operator 1 <(macaddr8,macaddr8),
    operator 2 <=(macaddr8,macaddr8),
    operator 3 =(macaddr8,macaddr8),
    operator 4 >=(macaddr8,macaddr8),
    operator 5 >(macaddr8,macaddr8),
    function 3(macaddr8, macaddr8) gin_extract_query_macaddr8(macaddr8, internal, smallint, internal, internal),
    function 4(macaddr8, macaddr8) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 2(macaddr8, macaddr8) gin_extract_value_macaddr8(macaddr8, internal),
    function 5(macaddr8, macaddr8) gin_compare_prefix_macaddr8(macaddr8, macaddr8, smallint, internal),
    function 1(macaddr8, macaddr8) macaddr8_cmp(macaddr8,macaddr8);

alter operator class macaddr8_ops using gin owner to postgres;

create operator family enum_ops using gin;

alter operator family enum_ops using gin add
    function 5(anyenum, anyenum) gin_compare_prefix_anyenum(anyenum, anyenum, smallint, internal),
    function 3(anyenum, anyenum) gin_extract_query_anyenum(anyenum, internal, smallint, internal, internal),
    function 4(anyenum, anyenum) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 1(anyenum, anyenum) gin_enum_cmp(anyenum, anyenum),
    function 2(anyenum, anyenum) gin_extract_value_anyenum(anyenum, internal);

alter operator family enum_ops using gin owner to postgres;

create operator class enum_ops default for type anyenum using gin as
    operator 1 <(anyenum,anyenum),
    operator 2 <=(anyenum,anyenum),
    operator 3 =(anyenum,anyenum),
    operator 4 >=(anyenum,anyenum),
    operator 5 >(anyenum,anyenum),
    function 4(anyenum, anyenum) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 1(anyenum, anyenum) gin_enum_cmp(anyenum, anyenum),
    function 2(anyenum, anyenum) gin_extract_value_anyenum(anyenum, internal),
    function 5(anyenum, anyenum) gin_compare_prefix_anyenum(anyenum, anyenum, smallint, internal),
    function 3(anyenum, anyenum) gin_extract_query_anyenum(anyenum, internal, smallint, internal, internal);

alter operator class enum_ops using gin owner to postgres;

create operator family uuid_ops using gin;

alter operator family uuid_ops using gin add
    function 5(uuid, uuid) gin_compare_prefix_uuid(uuid, uuid, smallint, internal),
    function 2(uuid, uuid) gin_extract_value_uuid(uuid, internal),
    function 4(uuid, uuid) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(uuid, uuid) gin_extract_query_uuid(uuid, internal, smallint, internal, internal);

alter operator family uuid_ops using gin owner to postgres;

create operator class uuid_ops default for type uuid using gin as
    operator 1 <(uuid,uuid),
    operator 2 <=(uuid,uuid),
    operator 3 =(uuid,uuid),
    operator 4 >=(uuid,uuid),
    operator 5 >(uuid,uuid),
    function 5(uuid, uuid) gin_compare_prefix_uuid(uuid, uuid, smallint, internal),
    function 4(uuid, uuid) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 2(uuid, uuid) gin_extract_value_uuid(uuid, internal),
    function 1(uuid, uuid) uuid_cmp(uuid,uuid),
    function 3(uuid, uuid) gin_extract_query_uuid(uuid, internal, smallint, internal, internal);

alter operator class uuid_ops using gin owner to postgres;

create operator family name_ops using gin;

alter operator family name_ops using gin add
    function 4(name, name) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(name, name) gin_extract_query_name(name, internal, smallint, internal, internal),
    function 2(name, name) gin_extract_value_name(name, internal),
    function 5(name, name) gin_compare_prefix_name(name, name, smallint, internal);

alter operator family name_ops using gin owner to postgres;

create operator class name_ops default for type name using gin as
    operator 1 <(name,name),
    operator 2 <=(name,name),
    operator 3 =(name,name),
    operator 4 >=(name,name),
    operator 5 >(name,name),
    function 5(name, name) gin_compare_prefix_name(name, name, smallint, internal),
    function 4(name, name) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 1(name, name) btnamecmp(name,name),
    function 3(name, name) gin_extract_query_name(name, internal, smallint, internal, internal),
    function 2(name, name) gin_extract_value_name(name, internal);

alter operator class name_ops using gin owner to postgres;

create operator family bool_ops using gin;

alter operator family bool_ops using gin add
    function 2(boolean, boolean) gin_extract_value_bool(boolean, internal),
    function 3(boolean, boolean) gin_extract_query_bool(boolean, internal, smallint, internal, internal),
    function 4(boolean, boolean) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 5(boolean, boolean) gin_compare_prefix_bool(boolean, boolean, smallint, internal);

alter operator family bool_ops using gin owner to postgres;

create operator class bool_ops default for type boolean using gin as
    operator 1 <(boolean,boolean),
    operator 2 <=(boolean,boolean),
    operator 3 =(boolean,boolean),
    operator 4 >=(boolean,boolean),
    operator 5 >(boolean,boolean),
    function 1(boolean, boolean) btboolcmp(boolean,boolean),
    function 5(boolean, boolean) gin_compare_prefix_bool(boolean, boolean, smallint, internal),
    function 4(boolean, boolean) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(boolean, boolean) gin_extract_query_bool(boolean, internal, smallint, internal, internal),
    function 2(boolean, boolean) gin_extract_value_bool(boolean, internal);

alter operator class bool_ops using gin owner to postgres;

create operator family bpchar_ops using gin;

alter operator family bpchar_ops using gin add
    function 2(character, character) gin_extract_value_bpchar(char, internal),
    function 5(character, character) gin_compare_prefix_bpchar(char, char, smallint, internal),
    function 4(character, character) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(character, character) gin_extract_query_bpchar(char, internal, smallint, internal, internal);

alter operator family bpchar_ops using gin owner to postgres;

create operator class bpchar_ops default for type character using gin as
    operator 1 <(character,character),
    operator 2 <=(character,character),
    operator 3 =(character,character),
    operator 4 >=(character,character),
    operator 5 >(character,character),
    function 1(character, character) bpcharcmp(character,character),
    function 5(character, character) gin_compare_prefix_bpchar(char, char, smallint, internal),
    function 4(character, character) gin_btree_consistent(internal, smallint, anyelement, integer, internal, internal),
    function 3(character, character) gin_extract_query_bpchar(char, internal, smallint, internal, internal),
    function 2(character, character) gin_extract_value_bpchar(char, internal);

alter operator class bpchar_ops using gin owner to postgres;

create operator family cube_ops using btree;

alter operator family cube_ops using btree add
    operator 4 >=(cube, cube),
    operator 3 =(cube, cube),
    operator 5 >(cube, cube),
    operator 1 <(cube, cube),
    operator 2 <=(cube, cube),
    function 1(cube, cube) cube_cmp(cube, cube);

alter operator family cube_ops using btree owner to postgres;

create operator class cube_ops default for type cube using btree as
    operator 1 <(cube, cube),
    operator 2 <=(cube, cube),
    operator 3 =(cube, cube),
    operator 4 >=(cube, cube),
    operator 5 >(cube, cube),
    function 1(cube, cube) cube_cmp(cube, cube);

alter operator class cube_ops using btree owner to postgres;

create operator family gist_cube_ops using gist;

alter operator family gist_cube_ops using gist add
    operator 14 ~(cube, cube),
    operator 3 &&(cube, cube),
    operator 6 =(cube, cube),
    operator 7 @>(cube, cube),
    operator 8 <@(cube, cube),
    operator 13 @(cube, cube),
    operator 15 ~>(cube, integer) for order by float_ops,
    operator 16 <#>(cube, cube) for order by float_ops,
    operator 17 <->(cube, cube) for order by float_ops,
    operator 18 <=>(cube, cube) for order by float_ops,
    function 2(cube, cube) g_cube_union(internal, internal),
    function 1(cube, cube) g_cube_consistent(internal, cube, smallint, oid, internal),
    function 7(cube, cube) g_cube_same(cube, cube, internal),
    function 5(cube, cube) g_cube_penalty(internal, internal, internal),
    function 6(cube, cube) g_cube_picksplit(internal, internal),
    function 8(cube, cube) g_cube_distance(internal, cube, smallint, oid, internal);

alter operator family gist_cube_ops using gist owner to postgres;

create operator class gist_cube_ops default for type cube using gist as
    operator 3 &&(cube, cube),
    operator 6 =(cube, cube),
    operator 7 @>(cube, cube),
    operator 8 <@(cube, cube),
    operator 13 @(cube, cube),
    operator 14 ~(cube, cube),
    operator 15 ~>(cube, integer) for order by float_ops,
    operator 16 <#>(cube, cube) for order by float_ops,
    operator 17 <->(cube, cube) for order by float_ops,
    operator 18 <=>(cube, cube) for order by float_ops,
    function 1(cube, cube) g_cube_consistent(internal, cube, smallint, oid, internal),
    function 2(cube, cube) g_cube_union(internal, internal),
    function 7(cube, cube) g_cube_same(cube, cube, internal),
    function 6(cube, cube) g_cube_picksplit(internal, internal),
    function 5(cube, cube) g_cube_penalty(internal, internal, internal),
    function 8(cube, cube) g_cube_distance(internal, cube, smallint, oid, internal);

alter operator class gist_cube_ops using gist owner to postgres;

create operator family gist_oid_ops using gist;

alter operator family gist_oid_ops using gist add
    operator 15 <->(oid, oid) for order by oid_ops,
    operator 6 <>(oid,oid),
    function 9(oid, oid) gbt_oid_fetch(internal),
    function 8(oid, oid) gbt_oid_distance(internal, oid, smallint, oid, internal),
    function 4(oid, oid) gbt_decompress(internal),
    function 5(oid, oid) gbt_oid_penalty(internal, internal, internal),
    function 7(oid, oid) gbt_oid_same(gbtreekey8, gbtreekey8, internal),
    function 6(oid, oid) gbt_oid_picksplit(internal, internal),
    function 1(oid, oid) gbt_oid_consistent(internal, oid, smallint, oid, internal),
    function 2(oid, oid) gbt_oid_union(internal, internal),
    function 3(oid, oid) gbt_oid_compress(internal);

alter operator family gist_oid_ops using gist owner to postgres;

create operator class gist_oid_ops default for type oid using gist as storage gbtreekey8 operator 1 <(oid,oid),
	operator 2 <=(oid,oid),
	operator 3 =(oid,oid),
	operator 4 >=(oid,oid),
	operator 5 >(oid,oid),
	function 4(oid, oid) gbt_decompress(internal),
	function 2(oid, oid) gbt_oid_union(internal, internal),
	function 1(oid, oid) gbt_oid_consistent(internal, oid, smallint, oid, internal),
	function 7(oid, oid) gbt_oid_same(gbtreekey8, gbtreekey8, internal),
	function 6(oid, oid) gbt_oid_picksplit(internal, internal),
	function 5(oid, oid) gbt_oid_penalty(internal, internal, internal),
	function 3(oid, oid) gbt_oid_compress(internal);

alter operator class gist_oid_ops using gist owner to postgres;

create operator family gist_int2_ops using gist;

alter operator family gist_int2_ops using gist add
    operator 15 <->(smallint, smallint) for order by integer_ops,
    operator 6 <>(smallint,smallint),
    function 8(smallint, smallint) gbt_int2_distance(internal, smallint, smallint, oid, internal),
    function 7(smallint, smallint) gbt_int2_same(gbtreekey4, gbtreekey4, internal),
    function 6(smallint, smallint) gbt_int2_picksplit(internal, internal),
    function 5(smallint, smallint) gbt_int2_penalty(internal, internal, internal),
    function 4(smallint, smallint) gbt_decompress(internal),
    function 3(smallint, smallint) gbt_int2_compress(internal),
    function 2(smallint, smallint) gbt_int2_union(internal, internal),
    function 9(smallint, smallint) gbt_int2_fetch(internal),
    function 1(smallint, smallint) gbt_int2_consistent(internal, smallint, smallint, oid, internal);

alter operator family gist_int2_ops using gist owner to postgres;

create operator class gist_int2_ops default for type smallint using gist as storage gbtreekey4 operator 1 <(smallint,smallint),
	operator 2 <=(smallint,smallint),
	operator 3 =(smallint,smallint),
	operator 4 >=(smallint,smallint),
	operator 5 >(smallint,smallint),
	function 3(smallint, smallint) gbt_int2_compress(internal),
	function 1(smallint, smallint) gbt_int2_consistent(internal, smallint, smallint, oid, internal),
	function 2(smallint, smallint) gbt_int2_union(internal, internal),
	function 4(smallint, smallint) gbt_decompress(internal),
	function 5(smallint, smallint) gbt_int2_penalty(internal, internal, internal),
	function 6(smallint, smallint) gbt_int2_picksplit(internal, internal),
	function 7(smallint, smallint) gbt_int2_same(gbtreekey4, gbtreekey4, internal);

alter operator class gist_int2_ops using gist owner to postgres;

create operator family gist_int4_ops using gist;

alter operator family gist_int4_ops using gist add
    operator 6 <>(integer,integer),
    operator 15 <->(integer, integer) for order by integer_ops,
    function 2(integer, integer) gbt_int4_union(internal, internal),
    function 8(integer, integer) gbt_int4_distance(internal, integer, smallint, oid, internal),
    function 9(integer, integer) gbt_int4_fetch(internal),
    function 1(integer, integer) gbt_int4_consistent(internal, integer, smallint, oid, internal),
    function 6(integer, integer) gbt_int4_picksplit(internal, internal),
    function 3(integer, integer) gbt_int4_compress(internal),
    function 4(integer, integer) gbt_decompress(internal),
    function 7(integer, integer) gbt_int4_same(gbtreekey8, gbtreekey8, internal),
    function 5(integer, integer) gbt_int4_penalty(internal, internal, internal);

alter operator family gist_int4_ops using gist owner to postgres;

create operator class gist_int4_ops default for type integer using gist as storage gbtreekey8 operator 1 <(integer,integer),
	operator 2 <=(integer,integer),
	operator 3 =(integer,integer),
	operator 4 >=(integer,integer),
	operator 5 >(integer,integer),
	function 5(integer, integer) gbt_int4_penalty(internal, internal, internal),
	function 3(integer, integer) gbt_int4_compress(internal),
	function 6(integer, integer) gbt_int4_picksplit(internal, internal),
	function 2(integer, integer) gbt_int4_union(internal, internal),
	function 4(integer, integer) gbt_decompress(internal),
	function 7(integer, integer) gbt_int4_same(gbtreekey8, gbtreekey8, internal),
	function 1(integer, integer) gbt_int4_consistent(internal, integer, smallint, oid, internal);

alter operator class gist_int4_ops using gist owner to postgres;

create operator family gist_int8_ops using gist;

alter operator family gist_int8_ops using gist add
    operator 15 <->(bigint, bigint) for order by integer_ops,
    operator 6 <>(bigint,bigint),
    function 6(bigint, bigint) gbt_int8_picksplit(internal, internal),
    function 3(bigint, bigint) gbt_int8_compress(internal),
    function 4(bigint, bigint) gbt_decompress(internal),
    function 5(bigint, bigint) gbt_int8_penalty(internal, internal, internal),
    function 2(bigint, bigint) gbt_int8_union(internal, internal),
    function 7(bigint, bigint) gbt_int8_same(gbtreekey16, gbtreekey16, internal),
    function 8(bigint, bigint) gbt_int8_distance(internal, bigint, smallint, oid, internal),
    function 9(bigint, bigint) gbt_int8_fetch(internal),
    function 1(bigint, bigint) gbt_int8_consistent(internal, bigint, smallint, oid, internal);

alter operator family gist_int8_ops using gist owner to postgres;

create operator class gist_int8_ops default for type bigint using gist as storage gbtreekey16 operator 1 <(bigint,bigint),
	operator 2 <=(bigint,bigint),
	operator 3 =(bigint,bigint),
	operator 4 >=(bigint,bigint),
	operator 5 >(bigint,bigint),
	function 7(bigint, bigint) gbt_int8_same(gbtreekey16, gbtreekey16, internal),
	function 3(bigint, bigint) gbt_int8_compress(internal),
	function 2(bigint, bigint) gbt_int8_union(internal, internal),
	function 4(bigint, bigint) gbt_decompress(internal),
	function 6(bigint, bigint) gbt_int8_picksplit(internal, internal),
	function 1(bigint, bigint) gbt_int8_consistent(internal, bigint, smallint, oid, internal),
	function 5(bigint, bigint) gbt_int8_penalty(internal, internal, internal);

alter operator class gist_int8_ops using gist owner to postgres;

create operator family gist_float4_ops using gist;

alter operator family gist_float4_ops using gist add
    operator 15 <->(real, real) for order by float_ops,
    operator 6 <>(real,real),
    function 9(real, real) gbt_float4_fetch(internal),
    function 8(real, real) gbt_float4_distance(internal, real, smallint, oid, internal),
    function 7(real, real) gbt_float4_same(gbtreekey8, gbtreekey8, internal),
    function 6(real, real) gbt_float4_picksplit(internal, internal),
    function 5(real, real) gbt_float4_penalty(internal, internal, internal),
    function 4(real, real) gbt_decompress(internal),
    function 3(real, real) gbt_float4_compress(internal),
    function 2(real, real) gbt_float4_union(internal, internal),
    function 1(real, real) gbt_float4_consistent(internal, real, smallint, oid, internal);

alter operator family gist_float4_ops using gist owner to postgres;

create operator class gist_float4_ops default for type real using gist as storage gbtreekey8 operator 4 >=(real,real),
	operator 1 <(real,real),
	operator 5 >(real,real),
	operator 2 <=(real,real),
	operator 3 =(real,real),
	function 2(real, real) gbt_float4_union(internal, internal),
	function 5(real, real) gbt_float4_penalty(internal, internal, internal),
	function 3(real, real) gbt_float4_compress(internal),
	function 6(real, real) gbt_float4_picksplit(internal, internal),
	function 7(real, real) gbt_float4_same(gbtreekey8, gbtreekey8, internal),
	function 4(real, real) gbt_decompress(internal),
	function 1(real, real) gbt_float4_consistent(internal, real, smallint, oid, internal);

alter operator class gist_float4_ops using gist owner to postgres;

create operator family gist_float8_ops using gist;

alter operator family gist_float8_ops using gist add
    operator 6 <>(double precision,double precision),
    operator 15 <->(double precision, double precision) for order by float_ops,
    function 8(double precision, double precision) gbt_float8_distance(internal, double precision, smallint, oid, internal),
    function 9(double precision, double precision) gbt_float8_fetch(internal),
    function 7(double precision, double precision) gbt_float8_same(gbtreekey16, gbtreekey16, internal),
    function 6(double precision, double precision) gbt_float8_picksplit(internal, internal),
    function 5(double precision, double precision) gbt_float8_penalty(internal, internal, internal),
    function 4(double precision, double precision) gbt_decompress(internal),
    function 3(double precision, double precision) gbt_float8_compress(internal),
    function 2(double precision, double precision) gbt_float8_union(internal, internal),
    function 1(double precision, double precision) gbt_float8_consistent(internal, double precision, smallint, oid, internal);

alter operator family gist_float8_ops using gist owner to postgres;

create operator class gist_float8_ops default for type double precision using gist as storage gbtreekey16 operator 3 =(double precision,double precision),
	operator 5 >(double precision,double precision),
	operator 4 >=(double precision,double precision),
	operator 2 <=(double precision,double precision),
	operator 1 <(double precision,double precision),
	function 3(double precision, double precision) gbt_float8_compress(internal),
	function 4(double precision, double precision) gbt_decompress(internal),
	function 5(double precision, double precision) gbt_float8_penalty(internal, internal, internal),
	function 2(double precision, double precision) gbt_float8_union(internal, internal),
	function 7(double precision, double precision) gbt_float8_same(gbtreekey16, gbtreekey16, internal),
	function 1(double precision, double precision) gbt_float8_consistent(internal, double precision, smallint, oid, internal),
	function 6(double precision, double precision) gbt_float8_picksplit(internal, internal);

alter operator class gist_float8_ops using gist owner to postgres;

create operator family gist_timestamp_ops using gist;

alter operator family gist_timestamp_ops using gist add
    operator 6 <>(timestamp without time zone,timestamp without time zone),
    operator 15 <->(timestamp, timestamp) for order by interval_ops,
    function 2(timestamp without time zone, timestamp without time zone) gbt_ts_union(internal, internal),
    function 9(timestamp without time zone, timestamp without time zone) gbt_ts_fetch(internal),
    function 8(timestamp without time zone, timestamp without time zone) gbt_ts_distance(internal, timestamp, smallint, oid, internal),
    function 7(timestamp without time zone, timestamp without time zone) gbt_ts_same(gbtreekey16, gbtreekey16, internal),
    function 6(timestamp without time zone, timestamp without time zone) gbt_ts_picksplit(internal, internal),
    function 5(timestamp without time zone, timestamp without time zone) gbt_ts_penalty(internal, internal, internal),
    function 4(timestamp without time zone, timestamp without time zone) gbt_decompress(internal),
    function 3(timestamp without time zone, timestamp without time zone) gbt_ts_compress(internal),
    function 1(timestamp without time zone, timestamp without time zone) gbt_ts_consistent(internal, timestamp, smallint, oid, internal);

alter operator family gist_timestamp_ops using gist owner to postgres;

create operator class gist_timestamp_ops default for type timestamp without time zone using gist as storage gbtreekey16 operator 3 =(timestamp without time zone,timestamp without time zone),
	operator 1 <(timestamp without time zone,timestamp without time zone),
	operator 5 >(timestamp without time zone,timestamp without time zone),
	operator 2 <=(timestamp without time zone,timestamp without time zone),
	operator 4 >=(timestamp without time zone,timestamp without time zone),
	function 6(timestamp without time zone, timestamp without time zone) gbt_ts_picksplit(internal, internal),
	function 3(timestamp without time zone, timestamp without time zone) gbt_ts_compress(internal),
	function 1(timestamp without time zone, timestamp without time zone) gbt_ts_consistent(internal, timestamp, smallint, oid, internal),
	function 7(timestamp without time zone, timestamp without time zone) gbt_ts_same(gbtreekey16, gbtreekey16, internal),
	function 4(timestamp without time zone, timestamp without time zone) gbt_decompress(internal),
	function 5(timestamp without time zone, timestamp without time zone) gbt_ts_penalty(internal, internal, internal),
	function 2(timestamp without time zone, timestamp without time zone) gbt_ts_union(internal, internal);

alter operator class gist_timestamp_ops using gist owner to postgres;

create operator family gist_timestamptz_ops using gist;

alter operator family gist_timestamptz_ops using gist add
    operator 15 <->(timestamp with time zone, timestamp with time zone) for order by interval_ops,
    operator 6 <>(timestamp with time zone,timestamp with time zone),
    function 2(timestamp with time zone, timestamp with time zone) gbt_ts_union(internal, internal),
    function 5(timestamp with time zone, timestamp with time zone) gbt_ts_penalty(internal, internal, internal),
    function 9(timestamp with time zone, timestamp with time zone) gbt_ts_fetch(internal),
    function 8(timestamp with time zone, timestamp with time zone) gbt_tstz_distance(internal, timestamp with time zone, smallint, oid, internal),
    function 7(timestamp with time zone, timestamp with time zone) gbt_ts_same(gbtreekey16, gbtreekey16, internal),
    function 3(timestamp with time zone, timestamp with time zone) gbt_tstz_compress(internal),
    function 6(timestamp with time zone, timestamp with time zone) gbt_ts_picksplit(internal, internal),
    function 4(timestamp with time zone, timestamp with time zone) gbt_decompress(internal),
    function 1(timestamp with time zone, timestamp with time zone) gbt_tstz_consistent(internal, timestamp with time zone, smallint, oid, internal);

alter operator family gist_timestamptz_ops using gist owner to postgres;

create operator class gist_timestamptz_ops default for type timestamp with time zone using gist as storage gbtreekey16 operator 5 >(timestamp with time zone,timestamp with time zone),
	operator 1 <(timestamp with time zone,timestamp with time zone),
	operator 3 =(timestamp with time zone,timestamp with time zone),
	operator 4 >=(timestamp with time zone,timestamp with time zone),
	operator 2 <=(timestamp with time zone,timestamp with time zone),
	function 4(timestamp with time zone, timestamp with time zone) gbt_decompress(internal),
	function 7(timestamp with time zone, timestamp with time zone) gbt_ts_same(gbtreekey16, gbtreekey16, internal),
	function 6(timestamp with time zone, timestamp with time zone) gbt_ts_picksplit(internal, internal),
	function 5(timestamp with time zone, timestamp with time zone) gbt_ts_penalty(internal, internal, internal),
	function 3(timestamp with time zone, timestamp with time zone) gbt_tstz_compress(internal),
	function 2(timestamp with time zone, timestamp with time zone) gbt_ts_union(internal, internal),
	function 1(timestamp with time zone, timestamp with time zone) gbt_tstz_consistent(internal, timestamp with time zone, smallint, oid, internal);

alter operator class gist_timestamptz_ops using gist owner to postgres;

create operator family gist_time_ops using gist;

alter operator family gist_time_ops using gist add
    operator 6 <>(time without time zone,time without time zone),
    operator 15 <->(time, time) for order by interval_ops,
    function 1(time without time zone, time without time zone) gbt_time_consistent(internal, time, smallint, oid, internal),
    function 9(time without time zone, time without time zone) gbt_time_fetch(internal),
    function 8(time without time zone, time without time zone) gbt_time_distance(internal, time, smallint, oid, internal),
    function 7(time without time zone, time without time zone) gbt_time_same(gbtreekey16, gbtreekey16, internal),
    function 6(time without time zone, time without time zone) gbt_time_picksplit(internal, internal),
    function 5(time without time zone, time without time zone) gbt_time_penalty(internal, internal, internal),
    function 4(time without time zone, time without time zone) gbt_decompress(internal),
    function 3(time without time zone, time without time zone) gbt_time_compress(internal),
    function 2(time without time zone, time without time zone) gbt_time_union(internal, internal);

alter operator family gist_time_ops using gist owner to postgres;

create operator class gist_time_ops default for type time without time zone using gist as storage gbtreekey16 operator 4 >=(time without time zone,time without time zone),
	operator 2 <=(time without time zone,time without time zone),
	operator 3 =(time without time zone,time without time zone),
	operator 5 >(time without time zone,time without time zone),
	operator 1 <(time without time zone,time without time zone),
	function 3(time without time zone, time without time zone) gbt_time_compress(internal),
	function 2(time without time zone, time without time zone) gbt_time_union(internal, internal),
	function 4(time without time zone, time without time zone) gbt_decompress(internal),
	function 1(time without time zone, time without time zone) gbt_time_consistent(internal, time, smallint, oid, internal),
	function 5(time without time zone, time without time zone) gbt_time_penalty(internal, internal, internal),
	function 6(time without time zone, time without time zone) gbt_time_picksplit(internal, internal),
	function 7(time without time zone, time without time zone) gbt_time_same(gbtreekey16, gbtreekey16, internal);

alter operator class gist_time_ops using gist owner to postgres;

create operator family gist_timetz_ops using gist;

alter operator family gist_timetz_ops using gist add
    operator 6 <>(time with time zone,time with time zone),
    function 3(time with time zone, time with time zone) gbt_timetz_compress(internal),
    function 1(time with time zone, time with time zone) gbt_timetz_consistent(internal, time with time zone, smallint, oid, internal),
    function 4(time with time zone, time with time zone) gbt_decompress(internal),
    function 2(time with time zone, time with time zone) gbt_time_union(internal, internal),
    function 5(time with time zone, time with time zone) gbt_time_penalty(internal, internal, internal),
    function 6(time with time zone, time with time zone) gbt_time_picksplit(internal, internal),
    function 7(time with time zone, time with time zone) gbt_time_same(gbtreekey16, gbtreekey16, internal);

alter operator family gist_timetz_ops using gist owner to postgres;

create operator class gist_timetz_ops default for type time with time zone using gist as storage gbtreekey16 operator 1 <(time with time zone,time with time zone),
	operator 2 <=(time with time zone,time with time zone),
	operator 3 =(time with time zone,time with time zone),
	operator 4 >=(time with time zone,time with time zone),
	operator 5 >(time with time zone,time with time zone),
	function 3(time with time zone, time with time zone) gbt_timetz_compress(internal),
	function 7(time with time zone, time with time zone) gbt_time_same(gbtreekey16, gbtreekey16, internal),
	function 5(time with time zone, time with time zone) gbt_time_penalty(internal, internal, internal),
	function 4(time with time zone, time with time zone) gbt_decompress(internal),
	function 6(time with time zone, time with time zone) gbt_time_picksplit(internal, internal),
	function 2(time with time zone, time with time zone) gbt_time_union(internal, internal),
	function 1(time with time zone, time with time zone) gbt_timetz_consistent(internal, time with time zone, smallint, oid, internal);

alter operator class gist_timetz_ops using gist owner to postgres;

create operator family gist_date_ops using gist;

alter operator family gist_date_ops using gist add
    operator 15 <->(date, date) for order by integer_ops,
    operator 6 <>(date,date),
    function 9(date, date) gbt_date_fetch(internal),
    function 8(date, date) gbt_date_distance(internal, date, smallint, oid, internal),
    function 7(date, date) gbt_date_same(gbtreekey8, gbtreekey8, internal),
    function 6(date, date) gbt_date_picksplit(internal, internal),
    function 5(date, date) gbt_date_penalty(internal, internal, internal),
    function 4(date, date) gbt_decompress(internal),
    function 3(date, date) gbt_date_compress(internal),
    function 2(date, date) gbt_date_union(internal, internal),
    function 1(date, date) gbt_date_consistent(internal, date, smallint, oid, internal);

alter operator family gist_date_ops using gist owner to postgres;

create operator class gist_date_ops default for type date using gist as storage gbtreekey8 operator 5 >(date,date),
	operator 4 >=(date,date),
	operator 3 =(date,date),
	operator 2 <=(date,date),
	operator 1 <(date,date),
	function 1(date, date) gbt_date_consistent(internal, date, smallint, oid, internal),
	function 6(date, date) gbt_date_picksplit(internal, internal),
	function 3(date, date) gbt_date_compress(internal),
	function 4(date, date) gbt_decompress(internal),
	function 2(date, date) gbt_date_union(internal, internal),
	function 5(date, date) gbt_date_penalty(internal, internal, internal),
	function 7(date, date) gbt_date_same(gbtreekey8, gbtreekey8, internal);

alter operator class gist_date_ops using gist owner to postgres;

create operator family gist_interval_ops using gist;

alter operator family gist_interval_ops using gist add
    operator 15 <->(interval, interval) for order by interval_ops,
    operator 6 <>(interval,interval),
    function 9(interval, interval) gbt_intv_fetch(internal),
    function 4(interval, interval) gbt_intv_decompress(internal),
    function 5(interval, interval) gbt_intv_penalty(internal, internal, internal),
    function 3(interval, interval) gbt_intv_compress(internal),
    function 6(interval, interval) gbt_intv_picksplit(internal, internal),
    function 2(interval, interval) gbt_intv_union(internal, internal),
    function 7(interval, interval) gbt_intv_same(gbtreekey32, gbtreekey32, internal),
    function 1(interval, interval) gbt_intv_consistent(internal, interval, smallint, oid, internal),
    function 8(interval, interval) gbt_intv_distance(internal, interval, smallint, oid, internal);

alter operator family gist_interval_ops using gist owner to postgres;

create operator class gist_interval_ops default for type interval using gist as storage gbtreekey32 operator 1 <(interval,interval),
	operator 5 >(interval,interval),
	operator 4 >=(interval,interval),
	operator 3 =(interval,interval),
	operator 2 <=(interval,interval),
	function 1(interval, interval) gbt_intv_consistent(internal, interval, smallint, oid, internal),
	function 2(interval, interval) gbt_intv_union(internal, internal),
	function 3(interval, interval) gbt_intv_compress(internal),
	function 6(interval, interval) gbt_intv_picksplit(internal, internal),
	function 7(interval, interval) gbt_intv_same(gbtreekey32, gbtreekey32, internal),
	function 4(interval, interval) gbt_intv_decompress(internal),
	function 5(interval, interval) gbt_intv_penalty(internal, internal, internal);

alter operator class gist_interval_ops using gist owner to postgres;

create operator family gist_cash_ops using gist;

alter operator family gist_cash_ops using gist add
    operator 15 <->(money, money) for order by money_ops,
    operator 6 <>(money,money),
    function 3(money, money) gbt_cash_compress(internal),
    function 5(money, money) gbt_cash_penalty(internal, internal, internal),
    function 8(money, money) gbt_cash_distance(internal, money, smallint, oid, internal),
    function 6(money, money) gbt_cash_picksplit(internal, internal),
    function 7(money, money) gbt_cash_same(gbtreekey16, gbtreekey16, internal),
    function 1(money, money) gbt_cash_consistent(internal, money, smallint, oid, internal),
    function 2(money, money) gbt_cash_union(internal, internal),
    function 9(money, money) gbt_cash_fetch(internal),
    function 4(money, money) gbt_decompress(internal);

alter operator family gist_cash_ops using gist owner to postgres;

create operator class gist_cash_ops default for type money using gist as storage gbtreekey16 operator 5 >(money,money),
	operator 3 =(money,money),
	operator 2 <=(money,money),
	operator 4 >=(money,money),
	operator 1 <(money,money),
	function 1(money, money) gbt_cash_consistent(internal, money, smallint, oid, internal),
	function 7(money, money) gbt_cash_same(gbtreekey16, gbtreekey16, internal),
	function 6(money, money) gbt_cash_picksplit(internal, internal),
	function 5(money, money) gbt_cash_penalty(internal, internal, internal),
	function 4(money, money) gbt_decompress(internal),
	function 3(money, money) gbt_cash_compress(internal),
	function 2(money, money) gbt_cash_union(internal, internal);

alter operator class gist_cash_ops using gist owner to postgres;

create operator family gist_macaddr_ops using gist;

alter operator family gist_macaddr_ops using gist add
    operator 6 <>(macaddr,macaddr),
    function 2(macaddr, macaddr) gbt_macad_union(internal, internal),
    function 1(macaddr, macaddr) gbt_macad_consistent(internal, macaddr, smallint, oid, internal),
    function 3(macaddr, macaddr) gbt_macad_compress(internal),
    function 4(macaddr, macaddr) gbt_decompress(internal),
    function 5(macaddr, macaddr) gbt_macad_penalty(internal, internal, internal),
    function 6(macaddr, macaddr) gbt_macad_picksplit(internal, internal),
    function 7(macaddr, macaddr) gbt_macad_same(gbtreekey16, gbtreekey16, internal),
    function 9(macaddr, macaddr) gbt_macad_fetch(internal);

alter operator family gist_macaddr_ops using gist owner to postgres;

create operator class gist_macaddr_ops default for type macaddr using gist as storage gbtreekey16 operator 1 <(macaddr,macaddr),
	operator 3 =(macaddr,macaddr),
	operator 4 >=(macaddr,macaddr),
	operator 5 >(macaddr,macaddr),
	operator 2 <=(macaddr,macaddr),
	function 6(macaddr, macaddr) gbt_macad_picksplit(internal, internal),
	function 7(macaddr, macaddr) gbt_macad_same(gbtreekey16, gbtreekey16, internal),
	function 3(macaddr, macaddr) gbt_macad_compress(internal),
	function 2(macaddr, macaddr) gbt_macad_union(internal, internal),
	function 4(macaddr, macaddr) gbt_decompress(internal),
	function 5(macaddr, macaddr) gbt_macad_penalty(internal, internal, internal),
	function 1(macaddr, macaddr) gbt_macad_consistent(internal, macaddr, smallint, oid, internal);

alter operator class gist_macaddr_ops using gist owner to postgres;

create operator family gist_text_ops using gist;

alter operator family gist_text_ops using gist add
    operator 6 <>(text,text),
    function 4(text, text) gbt_var_decompress(internal),
    function 9(text, text) gbt_var_fetch(internal),
    function 7(text, text) gbt_text_same(gbtreekey_var, gbtreekey_var, internal),
    function 2(text, text) gbt_text_union(internal, internal),
    function 6(text, text) gbt_text_picksplit(internal, internal),
    function 3(text, text) gbt_text_compress(internal),
    function 5(text, text) gbt_text_penalty(internal, internal, internal),
    function 1(text, text) gbt_text_consistent(internal, text, smallint, oid, internal);

alter operator family gist_text_ops using gist owner to postgres;

create operator class gist_text_ops default for type text using gist as storage gbtreekey_var operator 4 >=(text,text),
	operator 3 =(text,text),
	operator 2 <=(text,text),
	operator 1 <(text,text),
	operator 5 >(text,text),
	function 7(text, text) gbt_text_same(gbtreekey_var, gbtreekey_var, internal),
	function 4(text, text) gbt_var_decompress(internal),
	function 6(text, text) gbt_text_picksplit(internal, internal),
	function 1(text, text) gbt_text_consistent(internal, text, smallint, oid, internal),
	function 5(text, text) gbt_text_penalty(internal, internal, internal),
	function 2(text, text) gbt_text_union(internal, internal),
	function 3(text, text) gbt_text_compress(internal);

alter operator class gist_text_ops using gist owner to postgres;

create operator family gist_bpchar_ops using gist;

alter operator family gist_bpchar_ops using gist add
    operator 6 <>(character,character),
    function 9(character, character) gbt_var_fetch(internal),
    function 1(character, character) gbt_bpchar_consistent(internal, char, smallint, oid, internal),
    function 2(character, character) gbt_text_union(internal, internal),
    function 3(character, character) gbt_bpchar_compress(internal),
    function 4(character, character) gbt_var_decompress(internal),
    function 5(character, character) gbt_text_penalty(internal, internal, internal),
    function 6(character, character) gbt_text_picksplit(internal, internal),
    function 7(character, character) gbt_text_same(gbtreekey_var, gbtreekey_var, internal);

alter operator family gist_bpchar_ops using gist owner to postgres;

create operator class gist_bpchar_ops default for type character using gist as storage gbtreekey_var operator 4 >=(character,character),
	operator 1 <(character,character),
	operator 2 <=(character,character),
	operator 3 =(character,character),
	operator 5 >(character,character),
	function 6(character, character) gbt_text_picksplit(internal, internal),
	function 1(character, character) gbt_bpchar_consistent(internal, char, smallint, oid, internal),
	function 2(character, character) gbt_text_union(internal, internal),
	function 3(character, character) gbt_bpchar_compress(internal),
	function 4(character, character) gbt_var_decompress(internal),
	function 5(character, character) gbt_text_penalty(internal, internal, internal),
	function 7(character, character) gbt_text_same(gbtreekey_var, gbtreekey_var, internal);

alter operator class gist_bpchar_ops using gist owner to postgres;

create operator family gist_bytea_ops using gist;

alter operator family gist_bytea_ops using gist add
    operator 6 <>(bytea,bytea),
    function 1(bytea, bytea) gbt_bytea_consistent(internal, bytea, smallint, oid, internal),
    function 9(bytea, bytea) gbt_var_fetch(internal),
    function 5(bytea, bytea) gbt_bytea_penalty(internal, internal, internal),
    function 4(bytea, bytea) gbt_var_decompress(internal),
    function 6(bytea, bytea) gbt_bytea_picksplit(internal, internal),
    function 3(bytea, bytea) gbt_bytea_compress(internal),
    function 7(bytea, bytea) gbt_bytea_same(gbtreekey_var, gbtreekey_var, internal),
    function 2(bytea, bytea) gbt_bytea_union(internal, internal);

alter operator family gist_bytea_ops using gist owner to postgres;

create operator class gist_bytea_ops default for type bytea using gist as storage gbtreekey_var operator 5 >(bytea,bytea),
	operator 1 <(bytea,bytea),
	operator 2 <=(bytea,bytea),
	operator 3 =(bytea,bytea),
	operator 4 >=(bytea,bytea),
	function 3(bytea, bytea) gbt_bytea_compress(internal),
	function 1(bytea, bytea) gbt_bytea_consistent(internal, bytea, smallint, oid, internal),
	function 2(bytea, bytea) gbt_bytea_union(internal, internal),
	function 4(bytea, bytea) gbt_var_decompress(internal),
	function 5(bytea, bytea) gbt_bytea_penalty(internal, internal, internal),
	function 6(bytea, bytea) gbt_bytea_picksplit(internal, internal),
	function 7(bytea, bytea) gbt_bytea_same(gbtreekey_var, gbtreekey_var, internal);

alter operator class gist_bytea_ops using gist owner to postgres;

create operator family gist_numeric_ops using gist;

alter operator family gist_numeric_ops using gist add
    operator 6 <>(numeric,numeric),
    function 2(numeric, numeric) gbt_numeric_union(internal, internal),
    function 4(numeric, numeric) gbt_var_decompress(internal),
    function 9(numeric, numeric) gbt_var_fetch(internal),
    function 7(numeric, numeric) gbt_numeric_same(gbtreekey_var, gbtreekey_var, internal),
    function 3(numeric, numeric) gbt_numeric_compress(internal),
    function 6(numeric, numeric) gbt_numeric_picksplit(internal, internal),
    function 1(numeric, numeric) gbt_numeric_consistent(internal, numeric, smallint, oid, internal),
    function 5(numeric, numeric) gbt_numeric_penalty(internal, internal, internal);

alter operator family gist_numeric_ops using gist owner to postgres;

create operator class gist_numeric_ops default for type numeric using gist as storage gbtreekey_var operator 4 >=(numeric,numeric),
	operator 1 <(numeric,numeric),
	operator 2 <=(numeric,numeric),
	operator 3 =(numeric,numeric),
	operator 5 >(numeric,numeric),
	function 7(numeric, numeric) gbt_numeric_same(gbtreekey_var, gbtreekey_var, internal),
	function 1(numeric, numeric) gbt_numeric_consistent(internal, numeric, smallint, oid, internal),
	function 2(numeric, numeric) gbt_numeric_union(internal, internal),
	function 3(numeric, numeric) gbt_numeric_compress(internal),
	function 4(numeric, numeric) gbt_var_decompress(internal),
	function 5(numeric, numeric) gbt_numeric_penalty(internal, internal, internal),
	function 6(numeric, numeric) gbt_numeric_picksplit(internal, internal);

alter operator class gist_numeric_ops using gist owner to postgres;

create operator family gist_bit_ops using gist;

alter operator family gist_bit_ops using gist add
    operator 6 <>(bit,bit),
    function 7(bit, bit) gbt_bit_same(gbtreekey_var, gbtreekey_var, internal),
    function 9(bit, bit) gbt_var_fetch(internal),
    function 6(bit, bit) gbt_bit_picksplit(internal, internal),
    function 5(bit, bit) gbt_bit_penalty(internal, internal, internal),
    function 4(bit, bit) gbt_var_decompress(internal),
    function 3(bit, bit) gbt_bit_compress(internal),
    function 2(bit, bit) gbt_bit_union(internal, internal),
    function 1(bit, bit) gbt_bit_consistent(internal, bit, smallint, oid, internal);

alter operator family gist_bit_ops using gist owner to postgres;

create operator class gist_bit_ops default for type bit using gist as storage gbtreekey_var operator 2 <=(bit,bit),
	operator 5 >(bit,bit),
	operator 4 >=(bit,bit),
	operator 3 =(bit,bit),
	operator 1 <(bit,bit),
	function 6(bit, bit) gbt_bit_picksplit(internal, internal),
	function 1(bit, bit) gbt_bit_consistent(internal, bit, smallint, oid, internal),
	function 2(bit, bit) gbt_bit_union(internal, internal),
	function 3(bit, bit) gbt_bit_compress(internal),
	function 4(bit, bit) gbt_var_decompress(internal),
	function 5(bit, bit) gbt_bit_penalty(internal, internal, internal),
	function 7(bit, bit) gbt_bit_same(gbtreekey_var, gbtreekey_var, internal);

alter operator class gist_bit_ops using gist owner to postgres;

create operator family gist_vbit_ops using gist;

alter operator family gist_vbit_ops using gist add
    operator 6 <>(bit varying,bit varying),
    function 9(bit varying, bit varying) gbt_var_fetch(internal),
    function 1(bit varying, bit varying) gbt_bit_consistent(internal, bit, smallint, oid, internal),
    function 2(bit varying, bit varying) gbt_bit_union(internal, internal),
    function 3(bit varying, bit varying) gbt_bit_compress(internal),
    function 4(bit varying, bit varying) gbt_var_decompress(internal),
    function 5(bit varying, bit varying) gbt_bit_penalty(internal, internal, internal),
    function 6(bit varying, bit varying) gbt_bit_picksplit(internal, internal),
    function 7(bit varying, bit varying) gbt_bit_same(gbtreekey_var, gbtreekey_var, internal);

alter operator family gist_vbit_ops using gist owner to postgres;

create operator class gist_vbit_ops default for type bit varying using gist as storage gbtreekey_var operator 2 <=(bit varying,bit varying),
	operator 3 =(bit varying,bit varying),
	operator 4 >=(bit varying,bit varying),
	operator 1 <(bit varying,bit varying),
	operator 5 >(bit varying,bit varying),
	function 7(bit varying, bit varying) gbt_bit_same(gbtreekey_var, gbtreekey_var, internal),
	function 1(bit varying, bit varying) gbt_bit_consistent(internal, bit, smallint, oid, internal),
	function 2(bit varying, bit varying) gbt_bit_union(internal, internal),
	function 6(bit varying, bit varying) gbt_bit_picksplit(internal, internal),
	function 3(bit varying, bit varying) gbt_bit_compress(internal),
	function 4(bit varying, bit varying) gbt_var_decompress(internal),
	function 5(bit varying, bit varying) gbt_bit_penalty(internal, internal, internal);

alter operator class gist_vbit_ops using gist owner to postgres;

create operator family gist_inet_ops using gist;

alter operator family gist_inet_ops using gist add
    operator 6 <>(inet,inet),
    function 2(inet, inet) gbt_inet_union(internal, internal),
    function 7(inet, inet) gbt_inet_same(gbtreekey16, gbtreekey16, internal),
    function 6(inet, inet) gbt_inet_picksplit(internal, internal),
    function 5(inet, inet) gbt_inet_penalty(internal, internal, internal),
    function 4(inet, inet) gbt_decompress(internal),
    function 3(inet, inet) gbt_inet_compress(internal),
    function 1(inet, inet) gbt_inet_consistent(internal, inet, smallint, oid, internal);

alter operator family gist_inet_ops using gist owner to postgres;

create operator class gist_inet_ops default for type inet using gist as storage gbtreekey16 operator 3 =(inet,inet),
	operator 4 >=(inet,inet),
	operator 2 <=(inet,inet),
	operator 1 <(inet,inet),
	operator 5 >(inet,inet),
	function 4(inet, inet) gbt_decompress(internal),
	function 1(inet, inet) gbt_inet_consistent(internal, inet, smallint, oid, internal),
	function 2(inet, inet) gbt_inet_union(internal, internal),
	function 3(inet, inet) gbt_inet_compress(internal),
	function 5(inet, inet) gbt_inet_penalty(internal, internal, internal),
	function 6(inet, inet) gbt_inet_picksplit(internal, internal),
	function 7(inet, inet) gbt_inet_same(gbtreekey16, gbtreekey16, internal);

alter operator class gist_inet_ops using gist owner to postgres;

create operator family gist_cidr_ops using gist;

alter operator family gist_cidr_ops using gist add
    operator 6 <>(inet,inet),
    function 2(cidr, cidr) gbt_inet_union(internal, internal),
    function 7(cidr, cidr) gbt_inet_same(gbtreekey16, gbtreekey16, internal),
    function 1(cidr, cidr) gbt_inet_consistent(internal, inet, smallint, oid, internal),
    function 5(cidr, cidr) gbt_inet_penalty(internal, internal, internal),
    function 4(cidr, cidr) gbt_decompress(internal),
    function 6(cidr, cidr) gbt_inet_picksplit(internal, internal),
    function 3(cidr, cidr) gbt_inet_compress(internal);

alter operator family gist_cidr_ops using gist owner to postgres;

create operator class gist_cidr_ops default for type cidr using gist as storage gbtreekey16 operator 3 =(inet,inet),
	operator 4 >=(inet,inet),
	operator 5 >(inet,inet),
	operator 1 <(inet,inet),
	operator 2 <=(inet,inet),
	function 3(cidr, cidr) gbt_inet_compress(internal),
	function 2(cidr, cidr) gbt_inet_union(internal, internal),
	function 1(cidr, cidr) gbt_inet_consistent(internal, inet, smallint, oid, internal),
	function 7(cidr, cidr) gbt_inet_same(gbtreekey16, gbtreekey16, internal),
	function 5(cidr, cidr) gbt_inet_penalty(internal, internal, internal),
	function 6(cidr, cidr) gbt_inet_picksplit(internal, internal),
	function 4(cidr, cidr) gbt_decompress(internal);

alter operator class gist_cidr_ops using gist owner to postgres;

create operator family gist_uuid_ops using gist;

alter operator family gist_uuid_ops using gist add
    operator 6 <>(uuid,uuid),
    function 9(uuid, uuid) gbt_uuid_fetch(internal),
    function 4(uuid, uuid) gbt_decompress(internal),
    function 3(uuid, uuid) gbt_uuid_compress(internal),
    function 2(uuid, uuid) gbt_uuid_union(internal, internal),
    function 5(uuid, uuid) gbt_uuid_penalty(internal, internal, internal),
    function 6(uuid, uuid) gbt_uuid_picksplit(internal, internal),
    function 7(uuid, uuid) gbt_uuid_same(gbtreekey32, gbtreekey32, internal),
    function 1(uuid, uuid) gbt_uuid_consistent(internal, uuid, smallint, oid, internal);

alter operator family gist_uuid_ops using gist owner to postgres;

create operator class gist_uuid_ops default for type uuid using gist as storage gbtreekey32 operator 4 >=(uuid,uuid),
	operator 3 =(uuid,uuid),
	operator 2 <=(uuid,uuid),
	operator 1 <(uuid,uuid),
	operator 5 >(uuid,uuid),
	function 2(uuid, uuid) gbt_uuid_union(internal, internal),
	function 5(uuid, uuid) gbt_uuid_penalty(internal, internal, internal),
	function 7(uuid, uuid) gbt_uuid_same(gbtreekey32, gbtreekey32, internal),
	function 6(uuid, uuid) gbt_uuid_picksplit(internal, internal),
	function 1(uuid, uuid) gbt_uuid_consistent(internal, uuid, smallint, oid, internal),
	function 3(uuid, uuid) gbt_uuid_compress(internal),
	function 4(uuid, uuid) gbt_decompress(internal);

alter operator class gist_uuid_ops using gist owner to postgres;

create operator family gist_macaddr8_ops using gist;

alter operator family gist_macaddr8_ops using gist add
    operator 6 <>(macaddr8,macaddr8),
    function 9(macaddr8, macaddr8) gbt_macad8_fetch(internal),
    function 3(macaddr8, macaddr8) gbt_macad8_compress(internal),
    function 2(macaddr8, macaddr8) gbt_macad8_union(internal, internal),
    function 1(macaddr8, macaddr8) gbt_macad8_consistent(internal, macaddr8, smallint, oid, internal),
    function 4(macaddr8, macaddr8) gbt_decompress(internal),
    function 5(macaddr8, macaddr8) gbt_macad8_penalty(internal, internal, internal),
    function 6(macaddr8, macaddr8) gbt_macad8_picksplit(internal, internal),
    function 7(macaddr8, macaddr8) gbt_macad8_same(gbtreekey16, gbtreekey16, internal);

alter operator family gist_macaddr8_ops using gist owner to postgres;

create operator class gist_macaddr8_ops default for type macaddr8 using gist as storage gbtreekey16 operator 2 <=(macaddr8,macaddr8),
	operator 3 =(macaddr8,macaddr8),
	operator 4 >=(macaddr8,macaddr8),
	operator 5 >(macaddr8,macaddr8),
	operator 1 <(macaddr8,macaddr8),
	function 7(macaddr8, macaddr8) gbt_macad8_same(gbtreekey16, gbtreekey16, internal),
	function 4(macaddr8, macaddr8) gbt_decompress(internal),
	function 3(macaddr8, macaddr8) gbt_macad8_compress(internal),
	function 2(macaddr8, macaddr8) gbt_macad8_union(internal, internal),
	function 5(macaddr8, macaddr8) gbt_macad8_penalty(internal, internal, internal),
	function 6(macaddr8, macaddr8) gbt_macad8_picksplit(internal, internal),
	function 1(macaddr8, macaddr8) gbt_macad8_consistent(internal, macaddr8, smallint, oid, internal);

alter operator class gist_macaddr8_ops using gist owner to postgres;

create operator family gist_enum_ops using gist;

alter operator family gist_enum_ops using gist add
    operator 6 <>(anyenum,anyenum),
    function 9(anyenum, anyenum) gbt_enum_fetch(internal),
    function 5(anyenum, anyenum) gbt_enum_penalty(internal, internal, internal),
    function 1(anyenum, anyenum) gbt_enum_consistent(internal, anyenum, smallint, oid, internal),
    function 7(anyenum, anyenum) gbt_enum_same(gbtreekey8, gbtreekey8, internal),
    function 2(anyenum, anyenum) gbt_enum_union(internal, internal),
    function 6(anyenum, anyenum) gbt_enum_picksplit(internal, internal),
    function 3(anyenum, anyenum) gbt_enum_compress(internal),
    function 4(anyenum, anyenum) gbt_decompress(internal);

alter operator family gist_enum_ops using gist owner to postgres;

create operator class gist_enum_ops default for type anyenum using gist as storage gbtreekey8 operator 4 >=(anyenum,anyenum),
	operator 5 >(anyenum,anyenum),
	operator 2 <=(anyenum,anyenum),
	operator 1 <(anyenum,anyenum),
	operator 3 =(anyenum,anyenum),
	function 7(anyenum, anyenum) gbt_enum_same(gbtreekey8, gbtreekey8, internal),
	function 6(anyenum, anyenum) gbt_enum_picksplit(internal, internal),
	function 5(anyenum, anyenum) gbt_enum_penalty(internal, internal, internal),
	function 4(anyenum, anyenum) gbt_decompress(internal),
	function 3(anyenum, anyenum) gbt_enum_compress(internal),
	function 2(anyenum, anyenum) gbt_enum_union(internal, internal),
	function 1(anyenum, anyenum) gbt_enum_consistent(internal, anyenum, smallint, oid, internal);

alter operator class gist_enum_ops using gist owner to postgres;

-- Cyclic dependencies found

create aggregate max(citext) (
    sfunc = citext_larger,
    stype = citext,
    combinefunc = citext_larger,
    parallel = safe,
    sortop = operator (>)
    );

alter aggregate max(citext) owner to postgres;

-- Cyclic dependencies found

create aggregate min(citext) (
    sfunc = citext_smaller,
    stype = citext,
    combinefunc = citext_smaller,
    parallel = safe,
    sortop = operator (<)
    );

alter aggregate min(citext) owner to postgres;

-- Cyclic dependencies found

create operator !~ (procedure = texticregexne, leftarg = citext, rightarg = citext, negator = ~, join = icregexnejoinsel, restrict = icregexnesel);

alter operator !~(citext, citext) owner to postgres;

create operator ~ (procedure = texticregexeq, leftarg = citext, rightarg = citext, negator = !~, join = icregexeqjoinsel, restrict = icregexeqsel);

alter operator ~(citext, citext) owner to postgres;

-- Cyclic dependencies found

create operator !~ (procedure = texticregexne, leftarg = citext, rightarg = text, negator = ~, join = icregexnejoinsel, restrict = icregexnesel);

alter operator !~(citext, text) owner to postgres;

create operator ~ (procedure = texticregexeq, leftarg = citext, rightarg = text, negator = !~, join = icregexeqjoinsel, restrict = icregexeqsel);

alter operator ~(citext, text) owner to postgres;

-- Cyclic dependencies found

create operator !~* (procedure = texticregexne, leftarg = citext, rightarg = citext, negator = ~*, join = icregexnejoinsel, restrict = icregexnesel);

alter operator !~*(citext, citext) owner to postgres;

create operator ~* (procedure = texticregexeq, leftarg = citext, rightarg = citext, negator = !~*, join = icregexeqjoinsel, restrict = icregexeqsel);

alter operator ~*(citext, citext) owner to postgres;

-- Cyclic dependencies found

create operator !~* (procedure = texticregexne, leftarg = citext, rightarg = text, negator = ~*, join = icregexnejoinsel, restrict = icregexnesel);

alter operator !~*(citext, text) owner to postgres;

create operator ~* (procedure = texticregexeq, leftarg = citext, rightarg = text, negator = !~*, join = icregexeqjoinsel, restrict = icregexeqsel);

alter operator ~*(citext, text) owner to postgres;

-- Cyclic dependencies found

create operator !~~ (procedure = texticnlike, leftarg = citext, rightarg = citext, negator = ~~, join = icnlikejoinsel, restrict = icnlikesel);

alter operator !~~(citext, citext) owner to postgres;

create operator ~~ (procedure = texticlike, leftarg = citext, rightarg = citext, negator = !~~, join = iclikejoinsel, restrict = iclikesel);

alter operator ~~(citext, citext) owner to postgres;

-- Cyclic dependencies found

create operator !~~ (procedure = texticnlike, leftarg = citext, rightarg = text, negator = ~~, join = icnlikejoinsel, restrict = icnlikesel);

alter operator !~~(citext, text) owner to postgres;

create operator ~~ (procedure = texticlike, leftarg = citext, rightarg = text, negator = !~~, join = iclikejoinsel, restrict = iclikesel);

alter operator ~~(citext, text) owner to postgres;

-- Cyclic dependencies found

create operator !~~* (procedure = texticnlike, leftarg = citext, rightarg = citext, negator = ~~*, join = icnlikejoinsel, restrict = icnlikesel);

alter operator !~~*(citext, citext) owner to postgres;

create operator ~~* (procedure = texticlike, leftarg = citext, rightarg = citext, negator = !~~*, join = iclikejoinsel, restrict = iclikesel);

alter operator ~~*(citext, citext) owner to postgres;

-- Cyclic dependencies found

create operator !~~* (procedure = texticnlike, leftarg = citext, rightarg = text, negator = ~~*, join = icnlikejoinsel, restrict = icnlikesel);

alter operator !~~*(citext, text) owner to postgres;

create operator ~~* (procedure = texticlike, leftarg = citext, rightarg = text, negator = !~~*, join = iclikejoinsel, restrict = iclikesel);

alter operator ~~*(citext, text) owner to postgres;

-- Cyclic dependencies found

create operator %> (procedure = word_similarity_commutator_op, leftarg = text, rightarg = text, commutator = <%, join = contjoinsel, restrict = contsel);

alter operator %>(text, text) owner to postgres;

create operator <% (procedure = word_similarity_op, leftarg = text, rightarg = text, commutator = %>, join = contjoinsel, restrict = contsel);

alter operator <%(text, text) owner to postgres;

-- Cyclic dependencies found

create operator %>> (procedure = strict_word_similarity_commutator_op, leftarg = text, rightarg = text, commutator = <<%, join = contjoinsel, restrict = contsel);

alter operator %>>(text, text) owner to postgres;

create operator <<% (procedure = strict_word_similarity_op, leftarg = text, rightarg = text, commutator = %>>, join = contjoinsel, restrict = contsel);

alter operator <<%(text, text) owner to postgres;

-- Cyclic dependencies found

create operator <->> (procedure = word_similarity_dist_commutator_op, leftarg = text, rightarg = text, commutator = <<->);

alter operator <->>(text, text) owner to postgres;

create operator <<-> (procedure = word_similarity_dist_op, leftarg = text, rightarg = text, commutator = <->>);

alter operator <<->(text, text) owner to postgres;

-- Cyclic dependencies found

create operator <->>> (procedure = strict_word_similarity_dist_commutator_op, leftarg = text, rightarg = text, commutator = <<<->);

alter operator <->>>(text, text) owner to postgres;

create operator <<<-> (procedure = strict_word_similarity_dist_op, leftarg = text, rightarg = text, commutator = <->>>);

alter operator <<<->(text, text) owner to postgres;

-- Cyclic dependencies found

create operator <> (procedure = citext_ne, leftarg = citext, rightarg = citext, commutator = <>, negator = =, join = neqjoinsel, restrict = neqsel);

alter operator <>(citext, citext) owner to postgres;

create operator = (procedure = citext_eq, leftarg = citext, rightarg = citext, commutator = =, negator = <>, join = eqjoinsel, restrict = eqsel, hashes, merges);

alter operator =(citext, citext) owner to postgres;

-- Cyclic dependencies found

create operator <> (procedure = cube_ne, leftarg = cube, rightarg = cube, commutator = <>, negator = =, join = neqjoinsel, restrict = neqsel);

alter operator <>(cube, cube) owner to postgres;

create operator = (procedure = cube_eq, leftarg = cube, rightarg = cube, commutator = =, negator = <>, join = eqjoinsel, restrict = eqsel, merges);

alter operator =(cube, cube) owner to postgres;

-- Cyclic dependencies found

create operator <> (procedure = hstore_ne, leftarg = hstore, rightarg = hstore, commutator = <>, negator = =, join = neqjoinsel, restrict = neqsel);

alter operator <>(hstore, hstore) owner to postgres;

create operator = (procedure = hstore_eq, leftarg = hstore, rightarg = hstore, commutator = =, negator = <>, join = eqjoinsel, restrict = eqsel, hashes, merges);

alter operator =(hstore, hstore) owner to postgres;

-- Cyclic dependencies found

create operator <> (procedure = ltree_ne, leftarg = ltree, rightarg = ltree, commutator = <>, negator = =, join = neqjoinsel, restrict = neqsel);

alter operator <>(ltree, ltree) owner to postgres;

create operator = (procedure = ltree_eq, leftarg = ltree, rightarg = ltree, commutator = =, negator = <>, join = eqjoinsel, restrict = eqsel, merges);

alter operator =(ltree, ltree) owner to postgres;

-- Cyclic dependencies found

create operator <@ (procedure = cube_contained, leftarg = cube, rightarg = cube, commutator = @>, join = contjoinsel, restrict = contsel);

alter operator <@(cube, cube) owner to postgres;

create operator @> (procedure = cube_contains, leftarg = cube, rightarg = cube, commutator = <@, join = contjoinsel, restrict = contsel);

alter operator @>(cube, cube) owner to postgres;

-- Cyclic dependencies found

create operator <@ (procedure = hs_contained, leftarg = hstore, rightarg = hstore, commutator = @>, join = contjoinsel, restrict = contsel);

alter operator <@(hstore, hstore) owner to postgres;

create operator @> (procedure = hs_contains, leftarg = hstore, rightarg = hstore, commutator = <@, join = contjoinsel, restrict = contsel);

alter operator @>(hstore, hstore) owner to postgres;

-- Cyclic dependencies found

create operator <@ (procedure = _int_contained, leftarg = integer[], rightarg = integer[], commutator = @>, join = _int_contained_joinsel, restrict = _int_contained_sel);

alter operator <@(integer[], integer[]) owner to postgres;

create operator @> (procedure = _int_contains, leftarg = integer[], rightarg = integer[], commutator = <@, join = _int_contains_joinsel, restrict = _int_contains_sel);

alter operator @>(integer[], integer[]) owner to postgres;

-- Cyclic dependencies found

create operator <@ (procedure = ltree_risparent, leftarg = ltree, rightarg = ltree, commutator = @>, join = contjoinsel, restrict = ltreeparentsel);

alter operator <@(ltree, ltree) owner to postgres;

create operator @> (procedure = ltree_isparent, leftarg = ltree, rightarg = ltree, commutator = <@, join = contjoinsel, restrict = ltreeparentsel);

alter operator @>(ltree, ltree) owner to postgres;

-- Cyclic dependencies found

create operator <@ (procedure = _ltree_r_isparent, leftarg = ltree, rightarg = ltree[], commutator = @>, join = contjoinsel, restrict = contsel);

alter operator <@(ltree, ltree[]) owner to postgres;

create operator @> (procedure = _ltree_isparent, leftarg = ltree[], rightarg = ltree, commutator = <@, join = contjoinsel, restrict = contsel);

alter operator @>(ltree[], ltree) owner to postgres;

-- Cyclic dependencies found

create operator <@ (procedure = _ltree_risparent, leftarg = ltree[], rightarg = ltree, commutator = @>, join = contjoinsel, restrict = contsel);

alter operator <@(ltree[], ltree) owner to postgres;

create operator @> (procedure = _ltree_r_risparent, leftarg = ltree, rightarg = ltree[], commutator = <@, join = contjoinsel, restrict = contsel);

alter operator @>(ltree, ltree[]) owner to postgres;

-- Cyclic dependencies found

create operator ? (procedure = lt_q_rregex, leftarg = lquery[], rightarg = ltree, commutator = ?, join = contjoinsel, restrict = contsel);

alter operator ?(lquery[], ltree) owner to postgres;

create operator ? (procedure = lt_q_regex, leftarg = ltree, rightarg = lquery[], commutator = ?, join = contjoinsel, restrict = contsel);

alter operator ?(ltree, lquery[]) owner to postgres;

-- Cyclic dependencies found

create operator ? (procedure = _lt_q_rregex, leftarg = lquery[], rightarg = ltree[], commutator = ?, join = contjoinsel, restrict = contsel);

alter operator ?(lquery[], ltree[]) owner to postgres;

create operator ? (procedure = _lt_q_regex, leftarg = ltree[], rightarg = lquery[], commutator = ?, join = contjoinsel, restrict = contsel);

alter operator ?(ltree[], lquery[]) owner to postgres;

-- Cyclic dependencies found

create operator @ (procedure = cube_contains, leftarg = cube, rightarg = cube, commutator = ~, join = contjoinsel, restrict = contsel);

alter operator @(cube, cube) owner to postgres;

create operator ~ (procedure = cube_contained, leftarg = cube, rightarg = cube, commutator = @, join = contjoinsel, restrict = contsel);

alter operator ~(cube, cube) owner to postgres;

-- Cyclic dependencies found

create operator @ (procedure = hs_contains, leftarg = hstore, rightarg = hstore, commutator = ~, join = contjoinsel, restrict = contsel);

alter operator @(hstore, hstore) owner to postgres;

create operator ~ (procedure = hs_contained, leftarg = hstore, rightarg = hstore, commutator = @, join = contjoinsel, restrict = contsel);

alter operator ~(hstore, hstore) owner to postgres;

-- Cyclic dependencies found

create operator @ (procedure = _int_contains, leftarg = integer[], rightarg = integer[], commutator = ~, join = _int_contains_joinsel, restrict = _int_contains_sel);

alter operator @(integer[], integer[]) owner to postgres;

create operator ~ (procedure = _int_contained, leftarg = integer[], rightarg = integer[], commutator = @, join = _int_contained_joinsel, restrict = _int_contained_sel);

alter operator ~(integer[], integer[]) owner to postgres;

-- Cyclic dependencies found

create operator @ (procedure = ltxtq_exec, leftarg = ltree, rightarg = ltxtquery, commutator = @, join = contjoinsel, restrict = contsel);

alter operator @(ltree, ltxtquery) owner to postgres;

create operator @ (procedure = ltxtq_rexec, leftarg = ltxtquery, rightarg = ltree, commutator = @, join = contjoinsel, restrict = contsel);

alter operator @(ltxtquery, ltree) owner to postgres;

-- Cyclic dependencies found

create operator @ (procedure = _ltxtq_exec, leftarg = ltree[], rightarg = ltxtquery, commutator = @, join = contjoinsel, restrict = contsel);

alter operator @(ltree[], ltxtquery) owner to postgres;

create operator @ (procedure = _ltxtq_rexec, leftarg = ltxtquery, rightarg = ltree[], commutator = @, join = contjoinsel, restrict = contsel);

alter operator @(ltxtquery, ltree[]) owner to postgres;

-- Cyclic dependencies found

create operator @@ (procedure = boolop, leftarg = integer[], rightarg = query_int, commutator = ~~, join = contjoinsel, restrict = _int_matchsel);

alter operator @@(integer[], query_int) owner to postgres;

create operator ~~ (procedure = rboolop, leftarg = query_int, rightarg = integer[], commutator = @@, join = contjoinsel, restrict = _int_matchsel);

alter operator ~~(query_int, integer[]) owner to postgres;

-- Cyclic dependencies found

create operator ^<@ (procedure = ltree_risparent, leftarg = ltree, rightarg = ltree, commutator = ^@>, join = contjoinsel, restrict = contsel);

alter operator ^<@(ltree, ltree) owner to postgres;

create operator ^@> (procedure = ltree_isparent, leftarg = ltree, rightarg = ltree, commutator = ^<@, join = contjoinsel, restrict = contsel);

alter operator ^@>(ltree, ltree) owner to postgres;

-- Cyclic dependencies found

create operator ^<@ (procedure = _ltree_r_isparent, leftarg = ltree, rightarg = ltree[], commutator = ^@>, join = contjoinsel, restrict = contsel);

alter operator ^<@(ltree, ltree[]) owner to postgres;

create operator ^@> (procedure = _ltree_isparent, leftarg = ltree[], rightarg = ltree, commutator = ^<@, join = contjoinsel, restrict = contsel);

alter operator ^@>(ltree[], ltree) owner to postgres;

-- Cyclic dependencies found

create operator ^<@ (procedure = _ltree_risparent, leftarg = ltree[], rightarg = ltree, commutator = ^@>, join = contjoinsel, restrict = contsel);

alter operator ^<@(ltree[], ltree) owner to postgres;

create operator ^@> (procedure = _ltree_r_risparent, leftarg = ltree, rightarg = ltree[], commutator = ^<@, join = contjoinsel, restrict = contsel);

alter operator ^@>(ltree, ltree[]) owner to postgres;

-- Cyclic dependencies found

create operator ^? (procedure = lt_q_rregex, leftarg = lquery[], rightarg = ltree, commutator = ^?, join = contjoinsel, restrict = contsel);

alter operator ^?(lquery[], ltree) owner to postgres;

create operator ^? (procedure = lt_q_regex, leftarg = ltree, rightarg = lquery[], commutator = ^?, join = contjoinsel, restrict = contsel);

alter operator ^?(ltree, lquery[]) owner to postgres;

-- Cyclic dependencies found

create operator ^? (procedure = _lt_q_rregex, leftarg = lquery[], rightarg = ltree[], commutator = ^?, join = contjoinsel, restrict = contsel);

alter operator ^?(lquery[], ltree[]) owner to postgres;

create operator ^? (procedure = _lt_q_regex, leftarg = ltree[], rightarg = lquery[], commutator = ^?, join = contjoinsel, restrict = contsel);

alter operator ^?(ltree[], lquery[]) owner to postgres;

-- Cyclic dependencies found

create operator ^@ (procedure = ltxtq_exec, leftarg = ltree, rightarg = ltxtquery, commutator = ^@, join = contjoinsel, restrict = contsel);

alter operator ^@(ltree, ltxtquery) owner to postgres;

create operator ^@ (procedure = ltxtq_rexec, leftarg = ltxtquery, rightarg = ltree, commutator = ^@, join = contjoinsel, restrict = contsel);

alter operator ^@(ltxtquery, ltree) owner to postgres;

-- Cyclic dependencies found

create operator ^@ (procedure = _ltxtq_exec, leftarg = ltree[], rightarg = ltxtquery, commutator = ^@, join = contjoinsel, restrict = contsel);

alter operator ^@(ltree[], ltxtquery) owner to postgres;

create operator ^@ (procedure = _ltxtq_rexec, leftarg = ltxtquery, rightarg = ltree[], commutator = ^@, join = contjoinsel, restrict = contsel);

alter operator ^@(ltxtquery, ltree[]) owner to postgres;

-- Cyclic dependencies found

create operator ^~ (procedure = ltq_rregex, leftarg = lquery, rightarg = ltree, commutator = ^~, join = contjoinsel, restrict = contsel);

alter operator ^~(lquery, ltree) owner to postgres;

create operator ^~ (procedure = ltq_regex, leftarg = ltree, rightarg = lquery, commutator = ^~, join = contjoinsel, restrict = contsel);

alter operator ^~(ltree, lquery) owner to postgres;

-- Cyclic dependencies found

create operator ^~ (procedure = _ltq_rregex, leftarg = lquery, rightarg = ltree[], commutator = ^~, join = contjoinsel, restrict = contsel);

alter operator ^~(lquery, ltree[]) owner to postgres;

create operator ^~ (procedure = _ltq_regex, leftarg = ltree[], rightarg = lquery, commutator = ^~, join = contjoinsel, restrict = contsel);

alter operator ^~(ltree[], lquery) owner to postgres;

-- Cyclic dependencies found

create operator ~ (procedure = ltq_rregex, leftarg = lquery, rightarg = ltree, commutator = ~, join = contjoinsel, restrict = contsel);

alter operator ~(lquery, ltree) owner to postgres;

create operator ~ (procedure = ltq_regex, leftarg = ltree, rightarg = lquery, commutator = ~, join = contjoinsel, restrict = contsel);

alter operator ~(ltree, lquery) owner to postgres;

-- Cyclic dependencies found

create operator ~ (procedure = _ltq_rregex, leftarg = lquery, rightarg = ltree[], commutator = ~, join = contjoinsel, restrict = contsel);

alter operator ~(lquery, ltree[]) owner to postgres;

create operator ~ (procedure = _ltq_regex, leftarg = ltree[], rightarg = lquery, commutator = ~, join = contjoinsel, restrict = contsel);

alter operator ~(ltree[], lquery) owner to postgres;

-- Cyclic dependencies found

create operator #<# (procedure = hstore_lt, leftarg = hstore, rightarg = hstore, commutator = #>#, negator = #>=#, join = scalarltjoinsel, restrict = scalarltsel);

alter operator #<#(hstore, hstore) owner to postgres;

-- Cyclic dependencies found

create operator #># (procedure = hstore_gt, leftarg = hstore, rightarg = hstore, commutator = #<#, negator = #<=#, join = scalargtjoinsel, restrict = scalargtsel);

alter operator #>#(hstore, hstore) owner to postgres;

-- Cyclic dependencies found

create operator #<=# (procedure = hstore_le, leftarg = hstore, rightarg = hstore, commutator = #>=#, negator = #>#, join = scalarlejoinsel, restrict = scalarlesel);

alter operator #<=#(hstore, hstore) owner to postgres;

create operator #>=# (procedure = hstore_ge, leftarg = hstore, rightarg = hstore, commutator = #<=#, negator = #<#, join = scalargejoinsel, restrict = scalargesel);

alter operator #>=#(hstore, hstore) owner to postgres;

-- Cyclic dependencies found

create operator < (procedure = citext_lt, leftarg = citext, rightarg = citext, commutator = >, negator = >=, join = scalarltjoinsel, restrict = scalarltsel);

alter operator <(citext, citext) owner to postgres;

-- Cyclic dependencies found

create operator > (procedure = citext_gt, leftarg = citext, rightarg = citext, commutator = <, negator = <=, join = scalargtjoinsel, restrict = scalargtsel);

alter operator >(citext, citext) owner to postgres;

-- Cyclic dependencies found

create operator <= (procedure = citext_le, leftarg = citext, rightarg = citext, commutator = >=, negator = >, join = scalarlejoinsel, restrict = scalarlesel);

alter operator <=(citext, citext) owner to postgres;

create operator >= (procedure = citext_ge, leftarg = citext, rightarg = citext, commutator = <=, negator = <, join = scalargejoinsel, restrict = scalargesel);

alter operator >=(citext, citext) owner to postgres;

-- Cyclic dependencies found

create operator < (procedure = cube_lt, leftarg = cube, rightarg = cube, commutator = >, negator = >=, join = scalarltjoinsel, restrict = scalarltsel);

alter operator <(cube, cube) owner to postgres;

-- Cyclic dependencies found

create operator > (procedure = cube_gt, leftarg = cube, rightarg = cube, commutator = <, negator = <=, join = scalargtjoinsel, restrict = scalargtsel);

alter operator >(cube, cube) owner to postgres;

-- Cyclic dependencies found

create operator <= (procedure = cube_le, leftarg = cube, rightarg = cube, commutator = >=, negator = >, join = scalarlejoinsel, restrict = scalarlesel);

alter operator <=(cube, cube) owner to postgres;

create operator >= (procedure = cube_ge, leftarg = cube, rightarg = cube, commutator = <=, negator = <, join = scalargejoinsel, restrict = scalargesel);

alter operator >=(cube, cube) owner to postgres;

-- Cyclic dependencies found

create operator < (procedure = ltree_lt, leftarg = ltree, rightarg = ltree, commutator = >, negator = >=, join = contjoinsel, restrict = contsel);

alter operator <(ltree, ltree) owner to postgres;

-- Cyclic dependencies found

create operator > (procedure = ltree_gt, leftarg = ltree, rightarg = ltree, commutator = <, negator = <=, join = contjoinsel, restrict = contsel);

alter operator >(ltree, ltree) owner to postgres;

-- Cyclic dependencies found

create operator <= (procedure = ltree_le, leftarg = ltree, rightarg = ltree, commutator = >=, negator = >, join = contjoinsel, restrict = contsel);

alter operator <=(ltree, ltree) owner to postgres;

create operator >= (procedure = ltree_ge, leftarg = ltree, rightarg = ltree, commutator = <=, negator = <, join = contjoinsel, restrict = contsel);

alter operator >=(ltree, ltree) owner to postgres;

-- Cyclic dependencies found

create operator ~<=~ (procedure = citext_pattern_le, leftarg = citext, rightarg = citext, commutator = ~>=~, negator = ~>~, join = scalarltjoinsel, restrict = scalarltsel);

alter operator ~<=~(citext, citext) owner to postgres;

-- Cyclic dependencies found

create operator ~>=~ (procedure = citext_pattern_ge, leftarg = citext, rightarg = citext, commutator = ~<=~, negator = ~<~, join = scalargtjoinsel, restrict = scalargtsel);

alter operator ~>=~(citext, citext) owner to postgres;

-- Cyclic dependencies found

create operator ~<~ (procedure = citext_pattern_lt, leftarg = citext, rightarg = citext, commutator = ~>~, negator = ~>=~, join = scalarltjoinsel, restrict = scalarltsel);

alter operator ~<~(citext, citext) owner to postgres;

create operator ~>~ (procedure = citext_pattern_gt, leftarg = citext, rightarg = citext, commutator = ~<~, negator = ~<=~, join = scalargtjoinsel, restrict = scalargtsel);

alter operator ~>~(citext, citext) owner to postgres;


