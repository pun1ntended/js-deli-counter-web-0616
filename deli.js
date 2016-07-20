var katzdeliline = [];
function takeANumber(katzdeliline, name) {
    katzdeliline.push(name);
    return `Welcome, ${name}. You are number ${katzdeliline.length} in line.`
}
function nowServing(katzdeliline) {
    return katzdeliline.length === 0 ? `There is nobody waiting to be served!` : `Currently serving ${katzdeliline.shift()}.`;
}
function currentLine(katzdeliline) {
    if (katzdeliline.length === 0) {
        return `The line is currently empty.`
    } else {
        var current_line = []
        for (i = 0; i < katzdeliline.length; i++) {
            current_line.push(` ${katzdeliline.indexOf(katzdeliline[i]) + 1}. ${katzdeliline[i]}`);
        }
        return `The line is currently:${current_line}`;
    }
}