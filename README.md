# How to create

```
dotnet new react -o dotnet-react-basic-template
cd dotnet-react-basic-template
rm -rf ClientApp
npx create-react-app drbt-ui --template typescript
mv drbt-ui ClientApp
```

Then bring in frontend dependencies:

 - react-router v6
 - MUI v5

Also backend:

 - EF Core 6
 - sqlite db
