const Inmuebles = require("../../model/Inmuebles");
const cloudinay = require("cloudinary");
const fs = require("fs-extra");

function renderForm(req, res) {
  res.render("inmuebles/new");
}

async function createNewInmueble(req, res, next) {
    const inmueble = new Inmuebles(req.body);
    inmueble.user = req.user._id;
    try {
        const imageUrl = await cloudinay.v2.uploader.upload(req.file.path);
        inmueble.photo = imageUrl.secure_url;
        const nInmueble = await inmueble.save();
        await fs.unlink(req.file.path);
        if (nInmueble) {
            req.flash("success_msg", "Inmueble creado existosamente");
            res.redirect("/misinmuebles/inmuebles/create");
        } else {
            req.flash("error_msg", "Nombre repetido"), res.redirect("/misinmuebles/inmuebles/create");
        }
    } catch (error) {
        next(error);
    }
}

async function renderInmuebles(req, res, next) {
    const userId = req.user.id;
    const { tags } = req.query;
    try {
        const inmuebles = await Inmuebles.find({ user: userId, tags }).lean();

        res.render("inmuebles/mis-inmuebles", { inmuebles });
    } catch (error) {
        next(error);
    }
}

async function renderEditForm(req, res) {
    const { inmuebleId } = req.params;
    const inmueble = await Inmuebles.findOne({ _id: inmuebleId }).lean();
    if (inmueble.user != req.user.id) {
        req.flash("error_msg", "No tienes permisos");
        return res.redirect("/misinmuebles");
    }
    res.render("inmuebles/edit-inmueble", { inmueble });
}

async function updateInmueble(req, res, next) {
    const { inmuebleId } = req.params;
    const { body: inmueble } = req;

    try {
        await Inmuebles.updateOne({ _id: inmuebleId }, { $set: inmueble });
        req.flash("success_msg", "Inmueble Actualizado Exitosamente");
        res.redirect("/misinmuebles");
    } catch (error) {
        next(error);
    }
};

async function renderInmueble(req, res, next) {
    const { inmuebleId } = req.params;
    try {
    const inmueble = await Inmuebles.findOne({ _id: inmuebleId }).lean();
      res.render("inmuebles/ver-mas", { inmueble })
    } catch (error) {
      next(error);
    }
  }

module.exports = {
    renderForm,
    createNewInmueble,
    renderInmuebles,
    renderInmueble,
    renderEditForm,
    updateInmueble,
};
