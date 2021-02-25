---
title: "The Anatomy of a Damn Good Pull Request"
date: "2021-02-24"
---

I have seen so many bad pull requests. The code itself has comments littered with typos, placeholders that haven’t been changed, sloppy logic, and print statements used for debugging that remind us all that we will never, _ever_ use _real_ debuggers. The pull request’s description was clearly the last thing on the developer’s mind because that, too, is full of poor grammar, has incomplete information, and is far from taking advantage of so many of the beautiful built-ins Github offers like issue linking and milestone mapping.

Developers often forget about the gravity of their work. One hundred years ago, this career did not exist. Fifty years ago, it existed but looked drastically different and was much more laborious. One week ago, dependencies varied and patents had not been awarded and vulnerabilities had not yet been patched. Software changes at the speed of light and as developers we partake in this movement. When we write code, we’re adding our own piece of artwork to the masterpiece that is technology. We should take pride in the code that we write, as monotonous or boring or stale as it may seem. We are actively changing history. And that is why it is so disheartening to see subpar pull requests -- the things that _could be_ the pillars of change.

As a junior engineer, I admit that my experience is limited. I’m shielded from the pains of interacting with adjacent teams, playing tug-of-war with managers and directors over requirements and deadlines, and having a to-do list that is never fully checked off. However, I believe that well thought out pull requests benefit your team as a whole and bring a sense of accomplishment to the developer that can be hard to come by. I have built a checklist for my own personal usage, but felt that it might be helpful to other new engineers looking to impress their teammates or to anyone simply looking to become a more competent developer.

### 1: Spell out requirements

It may seem obvious, but by writing the acceptance criteria down, not only have you given yourself a skeleton of a PR description when the time comes, but you’re also guaranteed to not forget what you agreed to doing before asking for others to review it. There is nothing worse (I speak from experience) than submitting a PR, realizing you missed something, and then having to explain to your teammates (who may already be partway or completely through reviewing your work) that you’re still not done. Frustrating for you _and_ for them. Avoid this by having a checklist and not clicking “Submit Pull Request” until each item has been addressed.

### 2: Make your commit messages meaningful

Something I've seen others do that I've now adopted is to prefix every commit with `fix:` or `feat:`. The bulk of the commit message doesn't have to be an entire novel about the problem, how you fixed it, and what it does now, but providing a message that is actually helpful (_not_ things like `do some stuff`, `do some more stuff`, or `fix bug`) you can enable your reviewers to help follow your train of thought where they might have questions or more easily determine where something in particular might have been changed. You're leaving a detailed trail of records.

### 3: Read your code in the browser

Remember how in primary school your teacher would tell you to read your paper aloud to find hidden mistakes? For whatever reason, our brains can skip over errors without you even realizing it when you read in your head. The same goes for reading code in your own editor. There’s something about walking through pushed code in the Github browser (pre-pull request) that highlights mistakes and oddities. If you’re really extra, or are adding code that has some complex logic, try explaining your code out loud to your pet (or an imaginary coworker, the choice is yours). Teaching someone something highlights points of confusion (where you can add comments, because you’re still pre-pull request, remember?) or your own gaps in knowledge.

### 4: Take your pull request description seriously

No, you don’t necessarily have to write full sentences, cite all your sources, avoid starting sentences with “and” or “but”, and get the thing peer reviewed. You should, however, ensure that your PR description covers everything you’ve added or removed at a high level, highlights reasons behind why decisions were made, and points out any particular spots you’d like close revision or a second set of eyes. This enables your teammates to do their job better and leaves behind phenomenal documentation for the developers who come after you.

A format I like to use for feature pull request descriptions looks something like this:

```
This PR adds:
  - A certain thing by doing x
  - Another thing by doing y
  - A final thing by doing z
```

For pull requests that fix bugs, I prefer this format:

```
Problem:
  Describe the problem and previous attempts at
  fixing it, and be sure to always link the issue.
Solution:
  Describe the solution -- thoroughly! Always
  close the issue by using fancy Github keywords.
```

If your pull request includes visual changes to a UI, always include before and after photos. For bonus points, leave up a running instance of the branch so reviewers can interact with the new changes.

Put notes in _italics_, capitalize sentences, use markdown headers and subheaders, and use periods. And always use at least one emoji. 🤠

### 5: The dreaded review

I get it. Nobody likes being told that they were wrong, missing something, or could have done something better. Even after taking your time on your work, you’ll probably still make mistakes (especially as a newer engineer 🙋🏻). So when your teammates take the time to review your PR, take their feedback with grace and an open mind. You’ll learn more that way, and in the future you’ll begin to make less mistakes. When you make suggested changes, respond to your teammates' individual comments with a link to the SHA of the commit that included those changes so they can quickly review if the change is to their liking. I have learned this last bit from my present team, all of whom are remarkably good at giving feedback in a kind and constructive way. They make it easy to admit mistakes because they don’t keep a long record of wrongs and are only nitpicky where it matters -- a trait that is hard to come by.

### 6: 🍻

Seriously. When your PR finally makes it in, celebrate a little bit. It doesn’t have to be beer at 9:43am on a Wednesday morning, but it can be a little feather in your cap. You’ve contributed to the world of software, whether it be big or small, and that in itself is something worth cheersing to.
