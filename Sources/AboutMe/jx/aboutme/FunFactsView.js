require(jxswiftui).import();

class FunFactsView extends View {
    constructor() {
        super();
        this.state.funFact = "";
    }

    body() {
        return VStack([
            Text("Fun Facts")
                .font("largeTitle")
                .fontWeight("bold"),
            Text(this.state.funFact)
                .padding()
                .font("title")
                .frame({minHeight: 400}),
            Button("Show Random Fact", () => {
                const index = Math.floor(Math.random() * information.funFacts.length);
                this.state.funFact = information.funFacts[index];
            })
        ])
        .padding()
    }
}

exports.FunFactsView = FunFactsView;

/*  ORIGINAL APPLE SAMPLE CODE:

import SwiftUI

struct FunFactsView: View {
    @State private var funFact = ""

    var body: some View {
        VStack {
            Text("Fun Facts")
                .font(.largeTitle)
                .fontWeight(.bold)
            Text(funFact)
                .padding()
                .font(.title)
                .frame(minHeight: 400)
            Button("Show Random Fact") {
                funFact = information.funFacts.randomElement()!
            }
        }
        .padding()
    }
}

*/

