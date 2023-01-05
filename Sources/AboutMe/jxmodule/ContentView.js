require(jxswiftui).import();

const {HomeView} = require("./HomeView.js");
const {StoryView} = require("./StoryView.js");
const {FavoritesView} = require("./FavoritesView.js");
const {FunFactsView} = require("./FunFactsView.js");

class ContentView extends View {
    body() {
        return TabView([
            new HomeView()
                .tabItem(
                    Label("Home", {systemImage: "person"})
                ),
            new StoryView()
                .tabItem(
                    Label("Story", {systemImage: "book"})
                ),
            new FavoritesView()
                .tabItem(
                    Label("Favorites", {systemImage: "star"})
                ),
            new FunFactsView()
                .tabItem(
                    Label("Fun Facts", {systemImage: "hand.thumbsup"})
                )
        ])
    }
}

exports.ContentView = ContentView;

/*  ORIGINAL APPLE SAMPLE CODE:

import SwiftUI

struct ContentView: View {
    var body: some View {
        TabView {
            HomeView()
                .tabItem {
                    Label("Home", systemImage: "person")
                }
            StoryView()
                .tabItem {
                    Label("Story", systemImage: "book")
                }
            FavoritesView()
                .tabItem {
                    Label("Favorites", systemImage: "star")
                }
            FunFactsView()
                .tabItem {
                    Label("Fun Facts", systemImage: "hand.thumbsup")
                }
        }
    }
}

*/
