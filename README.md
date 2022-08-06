# Frontend Interview Challenge

The goal of this exercise is to demonstrate technical proficiency in developing real-world React applications.

We are interested in assesing your technical knowledge of React, CSS and browser technologies, your ability to interpret specification requirements, and ability to implement a reasonable solution within 3-4 hour time frame.

You have **1 week** to complete this project. If you start to think the project will take longer than that, please let us know immediately.

# Requirements

- This repository contains a skeleton implementation of a photo gallery with hardcoded data. Your goal is to extend this application to build a photo gallery that loads data from [Adobe Stock Search API](https://developer.adobe.com/stock/docs/api/11-search-reference/). For this exercise, unauthenticated version of assets returned by the API is sufficient.
- Add a search functionality to filter results based on the search key word.

Here is an example of a basic gallery layout might look like:\
![Photo Gallery Screenshot](photo-gallery-example.png?raw=true "Photo Gallery Example")

There's a lot of leeway of doing things your own way. You are free to use any libraries, techniques, styles that you are most comfortable with. We're looking for clearly written, concise code.

### Optional Bonus features

- Add a test framework and implement some reasonable tests for your code.
- Show a preview of the image its title on a modal when hovering or clicking on a thumbnail.
- Add a filter-by functionality to filter results by photos or videos. \
  URL params to filter by videos: `filters[content_type:video]=1`\
  URL params to filter by photos:`filters[content_type:photo]=1`

# API Usage

**Header Requirements**

`x-api-key` : Pass the API key obtained from [Adobe Developer Console](https://developer.adobe.com/console). See [Setup API Key] (#Setup-API-Key) for detailed instructions.

`x-Product`: Can pass any string

**URL parameters**

At least one `search_parameters[]` is required

Refer to API docs for more information about the [URL Parameters](https://developer.adobe.com/stock/docs/api/11-search-reference/#url-parameters)

Request URL example

```

https://stock.adobe.io/Rest/Media/1/Search/Files?locale=en-US&search_parameters[words]=dogs&search_parameters[limit]=20

```

API response example

```
{
  "nb_results" : value,
  "files": [
    {
      id: 516547387
      title: "Home mockup, bedroom interior background with rattan furniture and empty frames, Coastal style, 3d render"
      width: 3120
      height: 2593
      creator_name: "artjafara"
      creator_id: 205124956
      thumbnail_url: "https://as2.ftcdn.net/v2/jpg/05/16/54/73/500_F_516547387_eKF4EVSr8MTeaWoXHyOadeawghHRPfCk.jpg"
      thumbnail_html_tag: "<img src="https://as2.ftcdn.net/v2/jpg/05/16/54/73/500_F_516547387_eKF4EVSr8MTeaWoXHyOadeawghHRPfCk.jpg" alt="Home mockup, bedroom interior background with rattan furniture and empty frames, Coastal style, 3d render" title="Illustration: Home mockup, bedroom interior background with rattan furniture and empty frames, Coastal style, 3d render" zoom_ratio="1.3964240044" zoom_depth_max="2" />"
      thumbnail_width: 500
      thumbnail_height: 415
      media_type_id: 2
      vector_type: null
      content_type: "image/jpeg"
      category: Object
      stock_id: "eKF4EVSr8MTeaWoXHyOadeawghHRPfCk"
      premium_level_id: 0
    },
    {
      ...
    }
  ]
}
```

Refer to API docs for more information about the [Response Data](https://developer.adobe.com/stock/docs/api/11-search-reference/#responses)

# Evaluation Criteria

- Does the solution satisfy minimum requirements?
- Are the code choices consistent with React best practices?
- Are there any bugs that should have been addressed in the time allowed?
- Are there any bugs that weren't addressed due to lack of time but are noted as areas of improvement?
- Does the solution account for performance scenarios common to this type of usage?

# Setup

In order to complete this exercise, you need an Adobe account and an Adobe Stock API key.

### Setup API Key

Log into [Adobe Developer Console](https://developer.adobe.com/console) from your Adobe account and browse for `Adobe Stock` in [APIs & Services](https://developer.adobe.com/console/servicesandapis).

Select `Adobe Stock` -> `Create Project`. From `Configure API`, select `OAUTH 2.0 Single-Page App` and pick whatever values you prefer for `Default redirect URI` and `Redirect URI pattern`, because they will not be required for this exercise. Yes, we know this is confusing!. You will be directed to a page with the newly generated API key.\
**Note**: `CLIENT_ID` listed in this page is your `API_KEY`.

Feel free to reach out to us if you run into issues while setting up the API key.

### Run the app

Note: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

```
npm install
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.
