require(jxswiftui).import();

class HomeView extends View {
    body() {
        return VStack([
            Text("All About")
                .font("largeTitle")
                .fontWeight("bold")
                .padding(),
            Image.system("person")
                .resizable()
                .frame({width: 120, height: 120})
                .padding(20)
                .aspectRatio("fit")
                .background(Color.gray)
                .cornerRadius(10)
                .padding(40),
            Text(information.name)
                .font("title")
        ])
    }
}

exports.HomeView = HomeView;

/*  ORIGINAL APPLE SAMPLE CODE:

import SwiftUI

struct HomeView: View {
    var body: some View {
        VStack {
            Text("All About")
                .font(.largeTitle)
                .fontWeight(.bold)
                .padding()
            Image(systemName: "person")
                .resizable()
                .frame({width: 120, height: 120})
                .padding(20)
                .background(Color.gray)
                .cornerRadius(10)
                .padding(40)
            Text(information.name)
                .font(.title)
        }
    }
}

*/
