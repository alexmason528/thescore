FROM ruby:2.6.0

RUN mkdir /api
WORKDIR /api

COPY Gemfile ./
COPY Gemfile.lock ./

RUN bundle
