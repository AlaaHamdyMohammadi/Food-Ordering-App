const { Schema, models, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      validate: (value) => {
        if (!value?.length || value?.length < 5) {
          new Error("Password must be at least 5 characters.");
          return false;
        }
      },
    },
  },
  { timeStamp: true }
);

UserSchema.pre("save", async (next) => {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

export const User = models?.User || model("User", UserSchema);
