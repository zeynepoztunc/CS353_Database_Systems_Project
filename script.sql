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

create table "Posts"
(
    "rental-id"  integer not null
        primary key,
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
        primary key,
    "flat-type"       varchar(20),
    "num-of-rooms"    integer not null,
    "no-of-bathrooms" integer not null
);

alter table "Flat"
    owner to oyfcmypj;

create table "Room"
(
    "rental-id"              integer not null
        primary key,
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
    "rental-id" integer not null,
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
    "rental-id"    integer not null,
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
    "rental-id"   integer not null,
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
    "rental-id"   integer not null,
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
    "rental-id"      integer not null,
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
    "rental-id"        integer     not null,
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
    "rental-id"      integer not null,
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

create table amenities_list
(
    id   serial
        primary key,
    name varchar(100) not null
);

alter table amenities_list
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

create table "Cities"
(
    name      varchar(20) not null
        primary key,
    latitude  real,
    longitude varchar(20)
);

alter table "Cities"
    owner to oyfcmypj;

create table "Districts"
(
    name      varchar(20),
    city      varchar(20)
        references "Cities",
    latitude  real,
    longitude varchar(20)
);

alter table "Districts"
    owner to oyfcmypj;


