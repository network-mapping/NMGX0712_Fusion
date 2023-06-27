#!/bin/bash
##########################################
# Setup some variables for deployment.
s3_bucket=nmcaydencecom-te4w-standalone
profile_name=nmg-cayd
path_to_deployment_folder=.deployments
short_hash="Fusion-"$(git rev-parse --short HEAD)
##########################################

echo "THE LAST 3 COMMITS WERE..."
git log -3 --pretty=format:%h---%cn---%s | cat
printf "\n\n"

##read -r -p "Enter name for S3 folder,  or just use short hash [$(git rev-parse --short HEAD)]: " folder_name
read -r -p "Enter name for S3 folder,  or just use short hash [$short_hash]: " folder_name
folder_name=${folder_name:-$short_hash}

echo "Making a zip of the latest commit."
zip_file=$path_to_deployment_folder/"$folder_name.zip"
extract_dir="$path_to_deployment_folder/$folder_name"
if [ ! -f "$zip_file" ]; then
  git archive -o "$zip_file" --format=zip HEAD -0
fi

echo "Extracting the zip - I know this looks silly - but its the easiest way to get a committed archive.:"
if [ ! -f "$extract_dir" ]; then
  mkdir "$extract_dir"
  unzip -qq "$zip_file" -d "$extract_dir"
  #cp "$extract_dir"/te_7_3_0_test.html "$extract_dir"/te_7_3_0.html
  #cp "$extract_dir"/te_7_3_0_test.html "$extract_dir"/te_7_3_0_staging.html
fi

echo "Uploading into S3:"
(
  set -x
  aws s3 sync "$path_to_deployment_folder/$folder_name/" "s3://$s3_bucket/$folder_name/" --profile $profile_name
)

echo "Cleaning up"
(
  set -x
  rm "$zip_file"
  rm -r "$extract_dir"
)


echo "New Viewer URL:"
echo "https://viewer.nmcaydence.com/$folder_name/3d_viewer.html"

echo " "
echo "Complete. Enter to exit"
read dummy

