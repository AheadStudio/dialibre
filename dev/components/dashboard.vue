<template lang="jade">
    div()
        header(class="page-header", id="page-header", itemscope, itemtype="http://schema.org/WPHeader")
            newheader(:headersetting="headerProps")
        main(class="page-content page-content-nopadding")
            div(class="page-search")
                div(class="main-filter replace-scrollbar", data-toggle-hide="main-filter-new")
                    div(class="main-filter-items", style="background-color: #4c637b")
                        div(class="main-filter-item")
                            a(href="#newsearch", class="btn btn--white-inverse filter-button popup") new search
                            a(href="#newsearch", class="btn btn--white filter-button popup") my search

                            div(class="filter-radio-items")
                                label(class="filter-radio")
                                    input(type="radio", name="deals", class="filter-radio-item", checked="checked")
                                    span(class="filter-radio-title") All deals
                                label(class="filter-radio")
                                    input(type="radio", name="deals", class="filter-radio-item")
                                    span(class="filter-radio-title") My deals
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item")
                                span(class="filter-checkbox-title") Industry


                        div(class="filter-accordion", data-color="rgb(86, 114, 142)", data-container="location")
                            div(class="main-filter-item main-filter-item-header")
                                label(class="filter-checkbox", id="location")
                                    input(type="checkbox", class="filter-checkbox-item")
                                    span(class="filter-checkbox-title") Location
                            div(class="main-filter-item-content main-filter-item-content--lvl1", data-filter="location")
                                div(class="main-filter-item")
                                    label(class="filter-checkbox")
                                        input(type="checkbox", class="filter-checkbox-item")
                                        span(class="filter-checkbox-title") Africa
                                div(class="main-filter-item")
                                    label(class="filter-checkbox")
                                        input(type="checkbox", class="filter-checkbox-item")
                                        span(class="filter-checkbox-title") Australia / Oceania
                                div(class="main-filter-item")
                                    label(class="filter-checkbox")
                                        input(type="checkbox", class="filter-checkbox-item")
                                        span(class="filter-checkbox-title") Asia
                                div(class="filter-accordion", data-color="rgb(104, 135, 166)", data-container="europe")
                                    div(class="main-filter-item main-filter-item-header")
                                        label(class="filter-checkbox", id="europe")
                                            input(type="checkbox", class="filter-checkbox-item")
                                            span(class="filter-checkbox-title") Europe
                                    div(class="main-filter-item-content main-filter-item-content--lvl2 replace-scrollbar", data-filter="europe")
                                        div(class="main-filter-item")
                                            label(class="filter-checkbox")
                                                input(type="checkbox", class="filter-checkbox-item")
                                                span(class="filter-checkbox-title") Albania
                                        div(class="main-filter-item")
                                            label(class="filter-checkbox")
                                                input(type="checkbox", class="filter-checkbox-item")
                                                span(class="filter-checkbox-title") Andorra
                                        div(class="main-filter-item")
                                            label(class="filter-checkbox")
                                                input(type="checkbox", class="filter-checkbox-item")
                                                span(class="filter-checkbox-title") Armenia
                                        div(class="main-filter-item")
                                            label(class="filter-checkbox")
                                                input(type="checkbox", class="filter-checkbox-item")
                                                span(class="filter-checkbox-title") Austria
                                        div(class="main-filter-item")
                                            label(class="filter-checkbox")
                                                input(type="checkbox", class="filter-checkbox-item")
                                                span(class="filter-checkbox-title") Belarus
                                        div(class="main-filter-item")
                                            label(class="filter-checkbox")
                                                input(type="checkbox", class="filter-checkbox-item")
                                                span(class="filter-checkbox-title") Belgium
                                        div(class="main-filter-item")
                                            label(class="filter-checkbox")
                                                input(type="checkbox", class="filter-checkbox-item")
                                                span(class="filter-checkbox-title") Albania
                                        div(class="main-filter-item")
                                            label(class="filter-checkbox")
                                                input(type="checkbox", class="filter-checkbox-item")
                                                span(class="filter-checkbox-title") Andorra
                                        div(class="main-filter-item")
                                            label(class="filter-checkbox")
                                                input(type="checkbox", class="filter-checkbox-item")
                                                span(class="filter-checkbox-title") Armenia
                                        div(class="main-filter-item")
                                            label(class="filter-checkbox")
                                                input(type="checkbox", class="filter-checkbox-item")
                                                span(class="filter-checkbox-title") Austria
                                        div(class="main-filter-item")
                                            label(class="filter-checkbox")
                                                input(type="checkbox", class="filter-checkbox-item")
                                                span(class="filter-checkbox-title") Belarus
                                        div(class="main-filter-item")
                                            label(class="filter-checkbox")
                                                input(type="checkbox", class="filter-checkbox-item")
                                                span(class="filter-checkbox-title") Belgium
                                div(class="main-filter-item")
                                    label(class="filter-checkbox")
                                        input(type="checkbox", class="filter-checkbox-item")
                                        span(class="filter-checkbox-title") North America
                                div(class="main-filter-item")
                                    label(class="filter-checkbox")
                                        input(type="checkbox", class="filter-checkbox-item")
                                        span(class="filter-checkbox-title") South America
                        div(class="main-filter-item")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item")
                                span(class="filter-checkbox-title") Revenue
                        div(class="filter-accordion", data-color="rgb(86, 114, 142)", data-container="ebitda")
                            div(class="main-filter-item main-filter-item-header")
                                label(class="filter-checkbox", id="ebitda")
                                    input(type="checkbox", class="filter-checkbox-item")
                                    span(class="filter-checkbox-title") EBITDA
                            div(class="main-filter-item-content", data-filter="ebitda")
                                div(class="main-filter-item")
                                    input(type="text", placeholder="FROM $", class="filter-text-item filter-text-item--half")
                                    input(type="text", placeholder="TO $", class="filter-text-item filter-text-item--half")
                        div(class="main-filter-item")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item")
                                span(class="filter-checkbox-title") Cash Flow

                div(class="main-filter main-filter-new-search replace-scrollbar toggle-container not-active-toggle")
                    div(class="main-filter-items", style="background-color: #4c637b")
                        div(class="main-filter-item main-filter-new-search-item-btn")
                            a(href="#newsearch", class="btn btn--white-inverse filter-button popup") new search
                            div(class="main-filter-name-search") My search
                                a(href="#", class="new-search-name-close toggle-content", id="main-filter-new")
                        div(class="new-search-list", style="background-color: rgb(86, 114, 142)")
                            div(class="main-filter-item new-search-list-item")
                                a(href="#", class="link new-search-list-item-link")
                                    span(class="new-search-list-item-link-text")  Name 1
                                    span(class="new-search-list-item-link-close")
                            div(class="main-filter-item new-search-list-item")
                                a(href="#", class="link new-search-list-item-link")
                                    span(class="new-search-list-item-link-text")  Name 2
                                    span(class="new-search-list-item-link-close")
                            div(class="main-filter-item new-search-list-item")
                                a(href="#", class="link new-search-list-item-link")
                                    span(class="new-search-list-item-link-text")  Name 3  Name 3  Name 3  Name 3  Name 3
                                    span(class="new-search-list-item-link-close")
                            div(class="main-filter-item new-search-list-item")
                                a(href="#", class="link new-search-list-item-link")
                                    span(class="new-search-list-item-link-text")  Name 4
                                    span(class="new-search-list-item-link-close")
                            div(class="main-filter-item new-search-list-item")
                                a(href="#", class="link new-search-list-item-link")
                                    span(class="new-search-list-item-link-text")  Name 5
                                    span(class="new-search-list-item-link-close")
                            div(class="main-filter-item new-search-list-item")
                                a(href="#", class="link new-search-list-item-link")
                                    span(class="new-search-list-item-link-text")  Name 6
                                    span(class="new-search-list-item-link-close")
                            div(class="main-filter-item new-search-list-item")
                                a(href="#", class="link new-search-list-item-link")
                                    span(class="new-search-list-item-link-text")  Name 7
                                    span(class="new-search-list-item-link-close")

                maintable()

            div(id="unlock", class="popup-container popup-unlock white-popup mfp-hide")
                div(class="popup-title") Unlock selected new deals
                div(class="popup-unlock-deals-items")
                    div(class="popup-unlock-deals-item")
                        div(class="popup-unlock-deals-item-number") 1
                        div(class="popup-unlock-deals-item-name") Name deal 1
                        div(class="popup-unlock-deals-item-count")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item", data-cr="10")
                                span(class="filter-checkbox-title") 10cr
                        div(class="popup-unlock-deals-item-price")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item")
                                span(class="filter-checkbox-title") $2000

                    div(class="popup-unlock-deals-item")
                        div(class="popup-unlock-deals-item-number") 2
                        div(class="popup-unlock-deals-item-name") Name deal 2
                        div(class="popup-unlock-deals-item-count")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item", data-cr="5")
                                span(class="filter-checkbox-title") 5cr
                        div(class="popup-unlock-deals-item-price")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item")
                                span(class="filter-checkbox-title") $1000

                    div(class="popup-unlock-deals-item")
                        div(class="popup-unlock-deals-item-number") 3
                        div(class="popup-unlock-deals-item-name") Name deal 3
                        div(class="popup-unlock-deals-item-count")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item", data-cr="5")
                                span(class="filter-checkbox-title") 5cr
                        div(class="popup-unlock-deals-item-price")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item")
                                span(class="filter-checkbox-title") $1000

                    div(class="popup-unlock-deals-item")
                        div(class="popup-unlock-deals-item-number") 4
                        div(class="popup-unlock-deals-item-name") Name deal 4
                        div(class="popup-unlock-deals-item-count")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item", data-cr="5")
                                span(class="filter-checkbox-title") 5cr
                        div(class="popup-unlock-deals-item-price")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item")
                                span(class="filter-checkbox-title") $1000

                    div(class="popup-unlock-deals-item")
                        div(class="popup-unlock-deals-item-number") 5
                        div(class="popup-unlock-deals-item-name") Name deal 5
                        div(class="popup-unlock-deals-item-count")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item", data-cr="5")
                                span(class="filter-checkbox-title") 5cr
                        div(class="popup-unlock-deals-item-price")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item")
                                span(class="filter-checkbox-title") $1000

                div(class="popup-unlock-deals-information")
                    div(class="popup-unlock-deals-information--left")
                        div(class="popup-unlock-deals-information-total") total cost:
                            span(data-finalprice="0") 0 credits
                        div(class="popup-unlock-deals-information-result") 25cr + $1000
                        div(class="popup-unlock-deals-information-balance") You current balance: 200 credits
                    div(class="popup-unlock-deals-information--right")
                        button(type="button", class="btn btn--green-inverse popup-unlock-deals-information-btn") Earn credits
                        button(type="button", class="btn btn--green popup-unlock-deals-information-btn") Pay

            div(id="unlock2", class="popup-container popup-unlock2 white-popup mfp-hide")
                div(class="popup-title") Unlock Selected new deals
                div(class="popup-unlock-deals-items")
                    div(class="popup-unlock-deals-item")
                        div(class="popup-unlock-deals-item-number") 1
                        div(class="popup-unlock-deals-item-name") Name deal 1
                        div(class="popup-unlock-deals-item-count")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item", data-cr="10")
                                span(class="filter-checkbox-title") 10cr

                    div(class="popup-unlock-deals-item")
                        div(class="popup-unlock-deals-item-number") 2
                        div(class="popup-unlock-deals-item-name") Name deal 2
                        div(class="popup-unlock-deals-item-count")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item", data-cr="5")
                                span(class="filter-checkbox-title") 5cr

                    div(class="popup-unlock-deals-item")
                        div(class="popup-unlock-deals-item-number") 3
                        div(class="popup-unlock-deals-item-name") Name deal 3
                        div(class="popup-unlock-deals-item-count")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item", data-cr="5")
                                span(class="filter-checkbox-title") 5cr

                    div(class="popup-unlock-deals-item")
                        div(class="popup-unlock-deals-item-number") 4
                        div(class="popup-unlock-deals-item-name") Name deal 4
                        div(class="popup-unlock-deals-item-count")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item", data-cr="5")
                                span(class="filter-checkbox-title") 5cr

                    div(class="popup-unlock-deals-item")
                        div(class="popup-unlock-deals-item-number") 5
                        div(class="popup-unlock-deals-item-name") Name deal 5
                        div(class="popup-unlock-deals-item-count")
                            label(class="filter-checkbox")
                                input(type="checkbox", class="filter-checkbox-item", data-cr="5")
                                span(class="filter-checkbox-title") 5cr

                div(class="popup-unlock-deals-information")
                    div(class="popup-unlock-deals-information--left")
                        div(class="popup-unlock-deals-information-total") total cost:
                            span(data-finalprice="0") 0 credits
                        div(class="popup-unlock-deals-information-balance") You current balance: 200 credits
                    div(class="popup-unlock-deals-information--right")
                        button(type="button", class="btn btn--green popup-unlock-deals-information-btn") unlock

            div(id="export", class="popup-container popup-export white-popup mfp-hide")
                div(class="popup-title") export
                div(class="popup-subtitle") Choose one file format
                label(class="filter-radio")
                    input(type="radio", name="export", class="filter-radio-item")
                    span(class="filter-radio-title") XLSX
                label(class="filter-radio")
                    input(type="radio", name="export", class="filter-radio-item")
                    span(class="filter-radio-title") DOCS
                label(class="filter-radio")
                    input(type="radio", name="export", class="filter-radio-item")
                    span(class="filter-radio-title") PDF

                button(type="button", class="btn btn--green popup-export-btn") Download

            div(id="newsearch", class="popup-container popup-newsearch white-popup mfp-hide")
                div(class="popup-title") Do you want to create a new saved search with currently selected filters?
                div(class="popup-subtitle") By doing so you will be notified when new deals matching selected criteria become available.
                a(href="#", class="btn btn--green popup-newsearch-btn") Yes
                a(href="#", class="btn btn--green-inverse popup-newsearch-btn toggle-content", id="main-filter-new") No, Start New search

            div(id="savesearch", class="popup-container popup-savesearch white-popup mfp-hide")
                div(class="popup-title") Do you want to create a new saved search with currently selected filters?
                div(class="popup-subtitle") By doing so you will be notified when new deals matching selected criteria become available.
                form(action"#", class="form popup-savesearch-form")
                    div(class="form-row")
                        div(class="form-item-holder form-item-holder--full")
                            input(type="text", name="nsearch", class="form-item form-item--text", required, placeholder="Saved search name", aria-required="true")
                    div(class="form-row form-row--btn")
                        button(type="submit", class="btn btn--green popup-savesearch-btn") Yes
                        button(type="button", class="btn btn--green-inverse popup-savesearch-btn") Cansel

                    div(class="form-row form-row--clearfix")
                        label(class="form-checkbox")
                            input(type="radio", class="form-item form-checkbox-item form-item--checkbox", checked="checked", name="searchradio")
                            span(class="form-radio-title") Notify me by email when new deal matches my search
                    div(class="form-row form-row--clearfix")
                        label(class="form-checkbox")
                            input(type="radio", class="form-item form-checkbox-item form-item--checkbox", name="searchradio")
                            span(class="form-radio-title") Don't need email notification

            div(id="infodeals2", class="popup-container popup-infodeals white-popup mfp-hide")
                div(class="popup-infodeals-head")
                    div(class="popup-infodeals-head-map")
                        div(class="popup-infodeals-head-map-holder")
                            mapsvg()
                    div(class="popup-infodeals-head-name")
                        div(class="popup-infodeals-head-name-title") Meat Processor & Distributor
                        div(class="popup-infodeals-head-name-count") Private Label to 5000 SuperMarkets
                        div(class="popup-infodeals-head-name-location") Noth America - United State - South East
                        div(class="popup-infodeals-head-name-users") 5 Dealibre' users have confirmed this deal
                    div(class="popup-infodeals-head-price-items")
                        div(class="popup-infodeals-head-price-item")
                            span(class="popup-infodeals-head-price-item-text") Revenue
                            span(class="popup-infodeals-head-price-item-quantity") $50 m
                        div(class="popup-infodeals-head-price-item")
                            span(class="popup-infodeals-head-price-item-text") Ebitda
                            span(class="popup-infodeals-head-price-item-quantity") $5.6 m
                        div(class="popup-infodeals-head-price-item")
                            span(class="popup-infodeals-head-price-item-text") Cash flow
                            span(class="popup-infodeals-head-price-item-quantity") $5.1 m
                div(class="popup-infodeals-content")
                    div(class="popup-infodeals-content-item")
                        table(class="popup-infodeals-content-item-table")
                            thead
                                tr
                                    th(colspan="2") Company info
                            tbody
                                tr
                                    td Company name
                                    td
                                        a(href="#", class="update-text") update
                                tr
                                    td Industry
                                    td Meal Processor & Distributior
                                tr
                                    td Location
                                    td United State, Southh East
                                tr
                                    td Year Founded
                                    td
                                        img(src="../svg/zamok.svg")
                                tr
                                    td Headcount
                                    td
                                        img(src="../svg/zamok.svg")
                                tr
                                    td CEO Name
                                    td
                                        img(src="../svg/zamok.svg")
                                tr
                                    td(class="last-cell", colspan="2") Company Description
                                        span(class="full-text") Nullam nibh ex, posuere sit amet volutpat consequat, faucibus ut orci. Aenean quis odio sit amet urna suscipit pretium id a urna. Nullam maximus volutpat nibh, nec hendrerit justo eleifend quis. Suspendisse potenti. Mauris in nisl in libero dignissim finibus a eget odio. Orci varius natoque penatibus et magnis dis parturient montes




                    div(class="popup-infodeals-content-item")
                        table(class="popup-infodeals-content-item-table")
                            thead
                                tr
                                    th(colspan="2") Dates
                            tbody
                                tr
                                    td Posted Date
                                    td 15/06/2016
                                tr
                                    td Updated Date
                                    td 15/06/2016
                        table(class="popup-infodeals-content-item-table")
                            thead
                                tr
                                    th(colspan="2") Transaction Info
                            tbody
                                tr
                                    td Transaction Type
                                    td Sale
                                tr
                                    td Desired Sponsor
                                    td Family Office, PE Group, Corp M&A
                        table(class="popup-infodeals-content-item-table")
                            thead
                                tr
                                    th(colspan="2") Represented by
                            tbody
                                tr
                                    td Name
                                    td
                                        img(src="../svg/zamok.svg")
                                tr
                                    td Company
                                    td
                                        img(src="../svg/zamok.svg")
                                tr
                                    td Adress
                                    td
                                        img(src="../svg/zamok.svg")
                                tr
                                    td Phone
                                    td
                                        img(src="../svg/zamok.svg")
                                tr
                                    td Email
                                    td
                                        img(src="../svg/zamok.svg")
                    div(class="popup-infodeals-content-item")
                        table(class="popup-infodeals-content-item-table")
                            thead
                                tr
                                    th(colspan="2") Deal info
                            tbody
                                tr
                                    td Deal Type
                                    td Authorized Rep
                                tr
                                    td Posting User Rating
                                    td 4.9
                                tr
                                    td Sources
                                    td 5
                                tr
                                    td Tames Unloked
                                    td 21
                        table(class="popup-infodeals-content-item-table")
                            thead
                                tr
                                    th(colspan="2") Fees
                            tbody
                                tr
                                    td(class="last-cell", colspan="2") Fee paid by buyer
                        table(class="popup-infodeals-content-item-table popup-infodeals-content-item-table--background")
                            thead
                                tr
                                    th(colspan="4") Financials
                            tbody
                                tr
                                    td
                                    td 2014
                                    td 2015
                                    td 2016E

                                tr
                                    td Revenue
                                    td $42.4M
                                    td $50.4M
                                    td $58.4M
                                tr
                                    td Y-Y Growth
                                    td -
                                    td 18.9%
                                    td 15.9%
                                tr
                                    td EBITDA
                                    td $5.1M
                                    td $5.6M
                                    td $6.4M
                                tr
                                    td EBITDA Margin
                                    td 12%
                                    td 11%
                                    td 11.9%

                div(class="popup-infodeals-navigation")
                    a(href="#", class="link popup-infodeals-navigation-prev popup-infodeals-navigation-prev--w60")
                        span(class="popup-infodeals-navigation-icon") <
                        span(class="popup-infodeals-navigation-item") Previous deal

                    a(href="#nda", class="btn btn--blue popup-infodeals-navigation-btn popup") Sigh nda
                    a(href="#rating", class="btn btn--blue popup-infodeals-navigation-btn popup") Rate this deal
                    a(href="#nda", class="btn btn--green popup-infodeals-navigation-btn popup") Chat with rep
                    a(href="#reportdeal", class="btn btn--blue-inverse popup-infodeals-navigation-btn popup") report deal

                    a(href="#", class="link popup-infodeals-navigation-next popup-infodeals-navigation-next--w30")
                        span(class="popup-infodeals-navigation-item") Next deal
                        span(class="popup-infodeals-navigation-icon") >

            div(id="nda", class="popup-container popup-nda white-popup mfp-hide")
                div(class="popup-nda-info")
                    div(class="popup-nda-info-text replace-scrollbar")
                        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna tortor, cursus nec velit nec, ultrices elementum dui. Nulla tempus eget dui vitae condimentum. Nullam posuere lorem mollis, pharetra nisl in, venenatis purus. In vestibulum ante a ipsum tristique, eu bibendum elit pharetra. Aliquam tempus id eros id dignissim. Mauris aliquet urna ac massa vulputate, non volutpat sapien sagittis. Integer quis commodo mauris, id vehicula massa. Proin efficitur urna a orci congue imperdiet. Nam eget nibh a tellus tempor tempus ut sed turpis. Ut gravida nulla in ultrices maximus.
                        p Fusce at tristique est. Maecenas condimentum erat ante, a tempus ligula faucibus suscipit. Sed hendrerit arcu lobortis massa pretium pretium. In in quam metus. Integer rhoncus eros sit amet justo luctus elementum. Pellentesque blandit est in luctus varius. Integer eu nisl efficitur, accumsan nunc a, faucibus urna. Duis eu ante tempus lectus porttitor sollicitudin. Pellentesque molestie tellus eget imperdiet eleifend. Nulla imperdiet arcu interdum risus mollis gravida. Curabitur quis lectus sit amet ligula pharetra condimentum. In velit nibh, lacinia euismod sem consectetur, interdum malesuada dolor. Praesent varius tellus at arcu vehicula, vel consequat diam ultrices. Proin vitae auctor ligula. Nullam nec nulla nec nisl faucibus semper. Vestibulum elit magna, pharetra vel sapien ac, consectetur scelerisque massa.In in quam metus. Integer rhoncus eros sit amet justo luctus elementum. Pellentesque blandit est in luctus varius. Integer eu nisl efficitur, accumsan nunc a, faucibus urna. Duis eu ante tempus lectus porttitor sollicitudin.
                        p Pellentesque molestie tellus eget imperdiet eleifend. Nulla imperdiet arcu interdum risus mollis gravida. Nulla ut blandit augue, sed rhoncus tellus. Donec faucibus posuere turpis vel viverra.Mauris condimentum efficitur velit, vitae fringilla quam iaculis et.Fusce elementum in lorem non tristique.
                        p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla urna tortor, cursus nec velit nec, ultrices elementum dui. Nulla tempus eget dui vitae condimentum. Nullam posuere lorem mollis, pharetra nisl in, venenatis purus. In vestibulum ante a ipsum tristique, eu bibendum elit pharetra. Aliquam tempus id eros id dignissim. Mauris aliquet urna ac massa vulputate, non volutpat sapien sagittis. Integer quis commodo mauris, id vehicula massa. Proin efficitur urna a orci congue imperdiet. Nam eget nibh a tellus tempor tempus ut sed turpis. Ut gravida nulla in ultrices maximus.
                        p Fusce at tristique est. Maecenas condimentum erat ante, a tempus ligula faucibus suscipit. Sed hendrerit arcu lobortis massa pretium pretium. In in quam metus. Integer rhoncus eros sit amet justo luctus elementum. Pellentesque blandit est in luctus varius. Integer eu nisl efficitur, accumsan nunc a, faucibus urna. Duis eu ante tempus lectus porttitor sollicitudin. Pellentesque molestie tellus eget imperdiet eleifend. Nulla imperdiet arcu interdum risus mollis gravida. Curabitur quis lectus sit amet ligula pharetra condimentum. In velit nibh, lacinia euismod sem consectetur, interdum malesuada dolor. Praesent varius tellus at arcu vehicula, vel consequat diam ultrices. Proin vitae auctor ligula. Nullam nec nulla nec nisl faucibus semper. Vestibulum elit magna, pharetra vel sapien ac, consectetur scelerisque massa.In in quam metus. Integer rhoncus eros sit amet justo luctus elementum. Pellentesque blandit est in luctus varius. Integer eu nisl efficitur, accumsan nunc a, faucibus urna. Duis eu ante tempus lectus porttitor sollicitudin.
                        p Pellentesque molestie tellus eget imperdiet eleifend. Nulla imperdiet arcu interdum risus mollis gravida. Nulla ut blandit augue, sed rhoncus tellus. Donec faucibus posuere turpis vel viverra.Mauris condimentum efficitur velit, vitae fringilla quam iaculis et.Fusce elementum in lorem non tristique.
                    div(class="popup-nda-info-btn")
                        a(href="#", class="btn btn--green popup-nda-info-btn-item popup") Sign NDA
                        a(href="#reportdeal", class="btn btn--green-inverse popup-nda-info-btn-item popup") Chat With Rep
                        a(href="#rating", class="btn btn--green-inverse popup-nda-info-btn-item popup") Edit

            div(id="rating", class="popup-container popup-rating white-popup mfp-hide")
                form(class="form form popup-rating-items")
                    div(class="popup-rating-item")
                        div(class="popup-rating-item-text") What is your opinion of this deal’s information quality?
                        div(class="popup-rating-item-count popup-rating-item-count--quality")
                    div(class="popup-rating-item")
                        div(class="popup-rating-item-text") How would you rate this investment opportunity?
                        div(class="popup-rating-item-count popup-rating-item-count--opportunity")
                    div(class="popup-rating-item popup-rating-item--full")
                        textarea(placeholder="Do tell more", class="popup-rating-item--textarea")
                    button(href="#ratingresult", type="submit", class="btn btn--green popup-rating-btn popup") Rate this deal

            div(id="ratingresult", class="popup-container popup-rating white-popup mfp-hide")
                div(class="popup-rating-result")
                    p Thank you for reporting this deal!
                    p Our analysts will evaluate this deal closely.

            div(id="reportdeal", class="popup-container popup-rating white-popup mfp-hide")
                form(class="form popup-rating-items")
                    div(class="popup-rating-item popup-rating-item--full")
                        textarea(placeholder="Comment", class="popup-rating-item--textarea")
                    button(href="#ratingresult", type="submit", class="btn btn--green popup-rating-btn popup") Report deal

</template>

<script>
    // connect components in home page
    import newheader from './header.vue';
    import mapsvg from './svg-components/map.vue';
    import maintable from './main-components/component.dashboard.maintable.vue';

    export default {
        data: function() {
            return {
                headerProps: {
                    pageTitle    :  "",
                    mobileClass  :  "",
                    headerType   :  "",
                    isUserAuth   :   false,
                },
            }
        },
        components: {
            "newheader" : newheader,
            "mapsvg" : mapsvg,
            "maintable" : maintable,
        },
        created: function() {
            var self = this,
                $body = $("body");

            DealibreApp.methods.checkAuthorized(function(isAuth) {
                self.headerProps.isUserAuth = isAuth;
                if (!isAuth) {
                    self.headerProps.pageTitle = "search";
                    self.headerProps.mobileClass = "header-mobile--aut header-mobile--full";
                    self.headerProps.headerType = "white";
                } else {
                    self.headerProps.pageTitle = "search";
                    self.headerProps.mobileClass = "header-mobile--aut header-mobile--full";
                    self.headerProps.headerType = "white";
                }
            });
            if ($body.hasClass("page-home")) {
                $body.removeClass("page-home");
                $(".page-content", $body).addClass("page-content--auth");
            }
        },
        mounted: function() {
    		DEALIBRE.scrollBar.init();
    		DEALIBRE.rating.init();
    		DEALIBRE.scrollFix.init();
    		DEALIBRE.accordionFilter.init();
    		DEALIBRE.forms.init(this.$el);

    		DEALIBRE.tableSearch.init();
    		DEALIBRE.modalWindow.init();
    		DEALIBRE.content.init();
        }
    }
</script>
<style lang="css">
    .page-content-nopadding {
        padding: 0;
    }

</style>
