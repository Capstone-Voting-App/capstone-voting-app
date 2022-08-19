DROP TABLE IF EXISTS vote;
DROP TABLE IF EXISTS rank;
DROP TABLE IF EXISTS idea;
DROP TABLE IF EXISTS profile;

CREATE TABLE IF NOT EXISTS profile(
    "profileId" uuid NOT NULL,
    "profileActivationToken" CHAR(32),
    "profileCohort" SMALLINT NOT NULL ,
    "profileEmail" VARCHAR(128) NOT NULL ,
    "profileHash" CHAR NOT NULL ,
    "profileIsInstructor" BOOLEAN NOT NULL,
    "profileName" VARCHAR(32) NOT NULL,
    UNIQUE("profileEmail"),
    PRIMARY KEY ("profileId")
);

CREATE INDEX ON profile("profileEmail");

CREATE TABLE IF NOT EXISTS idea(
    "ideaId" uuid NOT NULL,
    "ideaProfileId" uuid NOT NULL,
    "ideaArchived" BOOLEAN,
    "ideaDescription" VARCHAR(255) NOT NULL,
    PRIMARY KEY ("ideaId"),
    FOREIGN KEY ("ideaProfileId") REFERENCES profile("profileId")
);

CREATE INDEX ON idea("ideaId");

CREATE TABLE IF NOT EXISTS rank(
    "rankIdeaId" uuid NOT NULL,
    "rankProfileId" uuid NOT NULL,
    "rankValue" SMALLINT NOT NULL,
    FOREIGN KEY ("rankIdeaId") REFERENCES idea("ideaId"),
    FOREIGN KEY ("rankProfileId")REFERENCES profile("profileId")
);

CREATE TABLE IF NOT EXISTS vote(
    "voteIdeaId" uuid NOT NULL,
    "voteProfileId" uuid NOT NULL,
    FOREIGN KEY ("voteIdeaId") REFERENCES idea("ideaId"),
    FOREIGN KEY ("voteProfileId") REFERENCES profile("profileId")
);




