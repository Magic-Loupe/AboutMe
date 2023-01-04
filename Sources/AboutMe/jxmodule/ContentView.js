require(jxswiftui).import()

exports.ContentView = class extends View {
    body() {
        return TabView([
            new HomeView()
                .tabItem(
                    Label({label: 'Home', systemImage: 'person'})
                ),
            new StoryView()
                .tabItem(
                    Label({label: 'Story', systemImage: 'book'})
                ),
            new FavoritesView()
                .tabItem(
                    Label({label: 'Favorites', systemImage: 'star'})
                ),
            new FunFactsView()
                .tabItem(
                    Label({label: 'Fun Facts', systemImage: 'hand.thumbsup'})
                )
        ])
    }
}

class HomeView extends View {
    body() {
        return Text('Home')
    }
}

class StoryView extends View {
    body() {
        return Text('Story')
    }
}

class FavoritesView extends View {
    body() {
        return Text('Favorites')
    }
}

class FunFactsView extends View {
    body() {
        return Text('Fun Facts')
    }
}

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
