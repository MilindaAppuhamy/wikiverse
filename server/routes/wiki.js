const express = require("express");
const router = express.Router();
const { Page, User, Tag } = require("../models");

// GET /wiki
router.get("/", async (req, res, next) => {
  try {
    const pages = await Page.findAll({
      include: [{ model: Tag }, { model: User, as: "author" }],
    });
    res.send(pages);
  } catch (error) {
    next(error);
  }
});

// POST /wiki
router.post("/", async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.body.user.id,
        email: req.body.user.email,
      },
    });

    const page = await Page.create({
      title: req.body.post.title,
      slug: req.body.post.slug,
      content: req.body.post.content,
      status: req.body.post.status,
    });

    await page.setAuthor(user);

    if (req.body.post.tags) {
      const tagArray = req.body.post.tags.split(" ");
      const tags = [];
      for (let tagName of tagArray) {
        const [tag, wasCreated] = await Tag.findOrCreate({
          where: {
            name: tagName,
          },
        });
        if (wasCreated) {
          tags.push(tag);
        }
      }
      await page.addTags(tags);
    }

    res.send(page);
  } catch (error) {
    next(error);
  }
});

// GET /wiki/search
router.get("/search", async (req, res, next) => {
  try {
    const pages = await Page.findByTag(req.query.search);
    res.send(pages);
  } catch (error) {
    next(error);
  }
});

// PUT /wiki/:id
router.put("/:id", async (req, res, next) => {
  try {
    const [updatedRowCount, updatedPages] = await Page.update(req.body, {
      where: {
        id: req.params.id,
      },
      returning: true,
    });

    const tagArray = req.body.tags.split(" ");
    const tags = await Promise.all(
      tagArray.map(async (tagName) => {
        const [tag, wasCreated] = await Tag.findOrCreate({
          where: {
            name: tagName,
          },
        });
        return tag;
      })
    );

    await updatedPages[0].setTags(tags);

    res.send(updatedPages[0]);
  } catch (error) {
    next(error);
  }
});

// DELETE /wiki/:id
router.delete("/:id", async (req, res, next) => {
  try {
    await Page.destroy({
      where: {
        id: req.params.id,
      },
    });

    const pages = await Page.findAll();
    res.send(pages);
  } catch (error) {
    next(error);
  }
});

// GET /wiki/:slug
router.get("/bySlug/:slug", async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
      include: [
        {
          model: Tag,
          through: { attributes: [] }, // exclude join table data
        },
        {
          model: User,
          as: "author",
        },
      ],
    });
    if (page === null) {
      res.status(404).send(notFoundPage());
    } else {
      res.send(page);
    }
  } catch (error) {
    next(error);
  }
});

// GET /wiki/:slug/similar
router.get("/bySlug/:slug/similar", async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
      include: [{ model: Tag }],
    });
    const tagNames = page.tags.map((tag) => tag.name);
    const similars = await page.findSimilar(tagNames);
    res.send(similars);
  } catch (error) {
    next(error);
  }
});

// GET /wiki/byAuthor/:authorId
router.get("/byAuthor/:authorId", async (req, res, next) => {
  try {
    const pages = await Page.findAll({
      where: {
        authorId: req.params.authorId,
      },
      include: [{ model: Tag }, { model: User, as: "author" }],
    });
    res.send(pages);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
