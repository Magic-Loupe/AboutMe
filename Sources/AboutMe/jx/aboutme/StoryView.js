require(jxswiftui).import();

class StoryView extends View {
    body() {
        return VStack([
            Text("My Story")
                .font("largeTitle")
                .fontWeight("bold")
                .padding(),
            ScrollView(
                Text(information.story)
                    .font("body")
                    .padding()
            )
        ])
        .padding(["top", "bottom"], 50)
    }
}

exports.StoryView = StoryView;

/*  ORIGINAL APPLE SAMPLE CODE:

import SwiftUI

struct StoryView: View {
    var body: some View {
        VStack {
            Text("My Story")
                .font(.largeTitle)
                .fontWeight(.bold)
                .padding()
            ScrollView {
                Text(information.story)
                    .font(.body)
                    .padding()
            }
        }
        .padding([.top, .bottom], 50)
    }
}

*/
