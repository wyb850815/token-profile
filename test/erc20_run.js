let fs = require('fs');
let path = require('path');

/*
let dirName = "/home/heipacker/StaticProjects/token-profile/erc20_eos";
fs.readdir(dirName, function (err, files) {
    files.forEach(processFile);
});
*/

let dirName = "/home/heipacker/StaticProjects/token-profile/erc20";
processFile("0x4984270a3723ccfd97cc9710d8cd35b9db10c44d.json");

function processFile(filename) {
    //sample file
    if (filename.startsWith("$template")) {
        return
    }
    let fullFileName = dirName + "/" + filename;
    let content = fs.readFileSync(fullFileName);
    let bp = JSON.parse(content.toString('utf8').trim());
    if (!bp.symbol) {
        return
    }
    if (bp.precision < 0) {
        return
    }
    if (!bp.overview) {
        bp.overview = {
            "en": bp.symbol + " Token.",
            "zh": bp.symbol + " 代币."
        };
    } else {
        if (!bp.overview.en) {
            bp.overview.en = "en";
        }
        if (!bp.overview.zh) {
            bp.overview.zh = "zh-Hans";
        }
    }
    if (!bp.logo) {
        bp.logo = "";
    }
    if (!bp.email) {
        bp.email = "";
    }
    if (!bp.website) {
        bp.website = "";
    }
    if (!bp.whitepaper) {
        bp.whitepaper = "";
    }
    if (!bp.state) {
        bp.state = "";
    }
    if (!bp.published_on) {
        bp.published_on = "1979-01-01";
    }
    if (!bp.initial_price) {
        bp.initial_price = {}
    }
    if (!bp.initial_price.ETH) {
        bp.initial_price.ETH = ""
    }
    if (!bp.initial_price.USD) {
        bp.initial_price.USD = ""
    }
    if (!bp.initial_price.BTC) {
        bp.initial_price.BTC = ""
    }
    if (!bp.initial_price.MOAC) {
        bp.initial_price.MOAC = ""
    }
    if (!bp.initial_price.SWTC) {
        bp.initial_price.SWTC = ""
    }
    if (!bp.links) {
        bp.links = {
            "blog": "https://your-awesome-project.com/blog",
            "twitter": "https://twitter.com/your-awesome-project",
            "telegram": "https://t.me/joinchat/your-awesome-project",
            "github": "https://github.com/your-awesome-project",
            "facebook": "https://www.facebook.com/your-awesome-project",
            "reddit": "https://www.reddit.com/r/your-awesome-project/",
            "slack": "https://your-awesome-project.slack.com",
            "medium": "https://medium.com/your-awesome-project"
        };
    }
    if (!bp.links.blog) {
        bp.links.blog = "https://your-awesome-project.com/blog"
    }
    if (!bp.links.twitter) {
        bp.links.twitter = "https://twitter.com/your-awesome-project"
    }
    if (!bp.links.telegram) {
        bp.links.telegram = "https://t.me/joinchat/your-awesome-project"
    }
    if (!bp.links.github) {
        bp.links.github = "https://github.com/your-awesome-project"
    }
    if (!bp.links.facebook) {
        bp.links.facebook = "https://www.facebook.com/your-awesome-project"
    }
    if (!bp.links.reddit) {
        bp.links.reddit = "https://www.reddit.com/r/your-awesome-project/"
    }
    if (!bp.links.slack) {
        bp.links.slack = "https://your-awesome-project.slack.com"
    }
    if (!bp.links.medium) {
        bp.links.medium = "https://medium.com/your-awesome-project"
    }
    let preSql = "INSERT INTO t_token_profile(`blockchain_id`, `overview`, `symbol`, `lang`, `address`, `account`, `email`, `website`, `whitepaper`, `state`, `initial_price_eth`, `initial_price_usd`, `initial_price_btc`, `initial_price_moac`, `initial_price_swtc`, `links_blog`, `links_twitter`, `links_telegram`, `links_github`, `links_facebook`, `links_reddit`, `links_slack`, `links_medium`, `published_on`)";
    let zhSql = preSql + " VALUES(1, '" + bp.overview.zh + "', '" + bp.symbol + "', 'zh-Hans', '', '" + bp.account + "', '" + bp.email + "', '" + bp.website + "', '" + bp.whitepaper + "', '" + bp.state + "', '" + bp.initial_price.ETH + "', '" + bp.initial_price.USD + "', '" + bp.initial_price.BTC + "', '" + bp.initial_price.MOAC + "', '" + bp.initial_price.SWTC + "', '" + bp.links.blog + "', '" + bp.links.twitter + "', '" + bp.links.telegram + "', '" + bp.links.github + "', '" + bp.links.facebook + "', '" + bp.links.reddit + "', '" + bp.links.slack + "', '" + bp.links.medium + "', '" + bp.published_on + "');";
    let enSql = preSql + " VALUES(1, '" + bp.overview.en + "', '" + bp.symbol + "', 'en', '', '" + bp.account + "', '" + bp.email + "', '" + bp.website + "', '" + bp.whitepaper + "', '" + bp.state + "', '" + bp.initial_price.ETH + "', '" + bp.initial_price.USD + "', '" + bp.initial_price.BTC + "', '" + bp.initial_price.MOAC + "', '" + bp.initial_price.SWTC + "', '" + bp.links.blog + "', '" + bp.links.twitter + "', '" + bp.links.telegram + "', '" + bp.links.github + "', '" + bp.links.facebook + "', '" + bp.links.reddit + "', '" + bp.links.slack + "', '" + bp.links.medium + "', '" + bp.published_on + "');";
    console.log(zhSql);
    console.log(enSql);
}