let state = [
    "The most technologically efficient machine that man has ever invented is the book.\n\n–Northrop Frye",
    "Just because something doesn’t do what you planned it to do doesn’t mean it’s useless.\n\n–Thomas Edison",
    "It has become appallingly obvious that our technology has exceeded our humanity.\n\n–Albert Einstein",
    "One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man.\n\n–Elbert Hubbard",
    "Technology is a word that describes something that doesn’t work yet.\n\n–Douglas Adams",
    "All this modern technology just makes people try to do everything at once.\n\n–Bill Watterson",
    "We are stuck with technology when what we really want is just stuff that works.\n\n–Douglas Adams",
    "Humanity is acquiring all the right technology for all the wrong reasons.\n\n–R. Buckminster Fuller",
    "It’s supposed to be automatic, but actually you have to push this button.\n\n–John Brunner",
    "Books may look like nothing more than words on a page, but they are actually an infinitely complex imaginotransference technology that translates odd, inky squiggles into pictures inside your head.\n\n–Jasper Fforde",
    "I think that novels that leave out technology misrepresent life as badly as Victorians misrepresented life by leaving out sex.\n\n–Kurt Vonnegut",
    "Technological progress has merely provided us with more efficient means for going backwards.\n\n–Aldous Huxley",
    "The human spirit must prevail over technology.\n\n–Albert Einstein",
    "Technology… the knack of so arranging the world that we don’t have to experience it.\n\n–Max Frisch",
    "Technology frightens me to death. It’s designed by engineers to impress other engineers. And they always come with instruction booklets that are written by engineers for other engineers — which is why almost no technology ever works.\n\n–John Cleese",
    "The great myth of our times is that technology is communication.\n\n–Libby Larsen",
    "Technology made large populations possible; large populations now make technology indispensable.\n\n–Joseph Wood Krutch",
    "Computers are useless. They can only give you answers.\n\n–Pablo Picasso",
    "TV and the Internet are good because they keep stupid people from spending too much time out in public.\n\n–Douglas Coupland",
    "This is the whole point of technology. It creates an appetite for immortality on the one hand. It threatens universal extinction on the other. Technology is lust removed from nature.\n\n–Don DeLillo",
    "The greatest achievement of humanity is not its works of art, science, or technology, but the recognition of its own dysfunction.\n\n–Eckhart Tolle",
    "First we thought the PC was a calculator. Then we found out how to turn numbers into letters with ASCII — and we thought it was a typewriter. Then we discovered graphics, and we thought it was a television. With the World Wide Web, we’ve realized it’s a brochure.\n\n–Douglas Adams",
    "Communications tools don’t get socially interesting until they get technologically boring.\n\n–Clay Shirky",
    "Any sufficiently advanced technology is equivalent to magic.\n\n–Sir Arthur C. Clarke",
    "Ethics change with technology.\n\n–Larry Niven",
    "So much technology, so little talent.\n\n–Vernor Vinge",
    "Programs must be written for people to read, and only incidentally for machines to execute.\n\n–Harold Abelson",
    "For a list of all the ways technology has failed to improve the quality of life, please press three.\n\n–Alice Kahn",
    "As a technology, the book is like a hammer. That is to say, it is perfect: a tool ideally suited to its task. Hammers can be tweaked and varied but will never go obsolete. Even when builders pound nails by the thousand with pneumatic nail guns, every household needs a hammer.\n\n–James Gleick",
    "The ultimate promise of technology is to make us master of a world that we command by the push of a button.\n\n–Volker Grassmuck",
    "Technology is the campfire around which we tell our stories.\n\n–Laurie Anderson",
    "The real danger is not that computers will begin to think like men, but that men will begin to think like computers.\n\n–Sydney J. Harris",
    "Once a new technology rolls over you, if you’re not part of the steamroller, you’re part of the road.\n\n–Stewart Brand",
    "Hardware: the parts of a computer that can be kicked.\n\n–Jeff Pesis",
    "The real problem is not whether machines think but whether men do.\n\n–B.F. Skinner",
    "Technology presumes there’s just one right way to do things and there never is.\n\n–Robert M. Pirsig",
    "Getting information off the Internet is like taking a drink from a fire hydrant.\n\n–Mitchell Kapor",
    "If we continue to develop our technology without wisdom or prudence, our servant may prove to be our executioner.\n\n–Omar N. Bradley",
    "Technology has to be invented or adopted.\n\n–Jared Diamond",
    "Technology… is a queer thing. It brings you great gifts with one hand, and it stabs you in the back with the other.\n\n–Carrie Snow",
    "Computers are like bikinis. They save people a lot of guesswork.\n\n–Sam Ewing",
    "The art challenges the technology, and the technology inspires the art.\n\n–John Lasseter",
    "All of our technology is completely unnecessary to a happy life.\n\n–Tom Hodgkinson",
    "Technology is a useful servant but a dangerous master.\n\n–Christian Lous Lange",
    "Technology is anything that wasn’t around when you were born.\n\n–Alan Kay",
    "Science and technology revolutionize our lives, but memory, tradition and myth frame our response.\n\n–Arthur M. Schlesinger",
    "Technology is nothing. What’s important is that you have a faith in people, that they’re basically good and smart, and if you give them tools, they’ll do wonderful things with them.\n\n–Steve Jobs",
    "This is why I loved technology: if you used it right, it could give you power and privacy.\n\n–Cory Doctorow",
    "Please, no matter how we advance technologically, please don’t abandon the book. There is nothing in our material world more beautiful than the book.\n\n–Patti Smith",
    "Technology is teaching us to be human again.\n\n–Simon Mainwaring"
]

var div = document.querySelector('div div')
var btnGen = document.querySelector('.genBtn')
var btnShareTwitter = document.querySelector('.shareBtn')
var darkBtn = document.querySelector(".dark_mode")
var body = document.querySelector("body")
var quoteDiv = document.querySelector(".quotes")
var label = document.querySelector(".switch")

function quoteGen() {
    var randQuote = state[randomNumber(0, state.length - 1)]
    div.textContent = randQuote
    btnShareTwitter.href = "https://twitter.com/intent/tweet/?text=" + randQuote;
}

function darKMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    quoteDiv.classList.add("quotes-white");
}

quoteDiv.classList.add("quotes")
function randomNumber(minimum, maximum) {
    return Math.round(Math.random() * (maximum - minimum) + minimum);
}

btnGen.addEventListener('click', quoteGen)
darkBtn.addEventListener('click', darKMode)
label.addEventListener('click',darKMode)

